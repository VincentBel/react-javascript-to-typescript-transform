import * as ts from 'typescript';

import * as helpers from '../helpers';
import { PropertyAccessExpression } from 'typescript';

export type Factory = ts.TransformerFactory<ts.SourceFile>;

/**
 * Get transform for transforming React code originally written in JS which does not have
 * props and state generic types
 * This transform will remove React component static "propTypes" member during transform
 */
export function reactJSMakePropsAndStateInterfaceTransformFactoryFactory(
  typeChecker: ts.TypeChecker,
): Factory {
  return function reactJSMakePropsAndStateInterfaceTransformFactory(
    context: ts.TransformationContext,
  ) {
    return function reactJSMakePropsAndStateInterfaceTransform(sourceFile: ts.SourceFile) {
      const visited = visitSourceFile(sourceFile as ts.SourceFile);
      ts.addEmitHelpers(visited, context.readEmitHelpers());
      return visited;

      function visitSourceFile(sourceFile: ts.SourceFile) {
        for (const statement of sourceFile.statements) {
          if (
            helpers.isClassDeclaration(statement) &&
            helpers.isReactComponent(statement, typeChecker)
          ) {
            return visitReactClassDeclaration(statement, sourceFile, typeChecker);
          }
        }

        for (const statement of sourceFile.statements) {
          if (
            ts.isExpressionStatement(statement) &&
            ts.isBinaryExpression(statement.expression) &&
            helpers.isReactPropTypeAssignmentStatement(statement)
          ) {
            const componentName =
            ts.isPropertyAccessExpression(statement.expression.left)
            ? statement.expression.left.expression.getText() 
            : ''

            const component = helpers.find(sourceFile.statements, s => {
              return (ts.isFunctionDeclaration(s) && s.name !== undefined && s.name.getText() === componentName) ||
              (ts.isVariableStatement(s) && s.declarationList.declarations[0].name.getText() === componentName)
            })

            if (component) {
            return visitReactStatelessComponent(
              component as ts.FunctionDeclaration | ts.VariableStatement,
              statement,
              sourceFile
            )
          }
        }
        }
        return sourceFile;
      }
    };
  };
}

function visitReactClassDeclaration(
  classDeclaration: ts.ClassDeclaration,
  sourceFile: ts.SourceFile,
  typeChecker: ts.TypeChecker,
) {
  if (!classDeclaration.heritageClauses || !classDeclaration.heritageClauses.length) {
    return sourceFile;
  }

  const className =
    classDeclaration && classDeclaration.name && classDeclaration.name.getText(sourceFile);
  const { type: propType, typeDeclarations } = getPropsTypeOfReactComponentClass(
    classDeclaration,
    sourceFile,
  );

  const stateType = getStateTypeOfReactComponentClass(classDeclaration, typeChecker);
  const propTypeName = `${className}Props`;
  const stateTypeName = `${className}State`;
  const propTypeDeclaration = ts.createTypeAliasDeclaration([], [], propTypeName, [], propType);
  const stateTypeDeclaration = ts.createTypeAliasDeclaration([], [], stateTypeName, [], stateType);
  const propTypeRef = ts.createTypeReferenceNode(propTypeName, []);
  const stateTypeRef = ts.createTypeReferenceNode(stateTypeName, []);

  const newClassDeclaration = getNewReactClassDeclaration(
    classDeclaration,
    propTypeRef,
    stateTypeRef,
  );

  const allTypeDeclarations = [...typeDeclarations, propTypeDeclaration, stateTypeDeclaration];
  let statements = helpers.insertBefore(
    sourceFile.statements,
    classDeclaration,
    allTypeDeclarations,
  );
  statements = helpers.replaceItem(statements, classDeclaration, newClassDeclaration);
  return ts.updateSourceFileNode(sourceFile, statements);
}

function getNewReactClassDeclaration(
  classDeclaration: ts.ClassDeclaration,
  propTypeRef: ts.TypeReferenceNode,
  stateTypeRef: ts.TypeReferenceNode,
) {
  if (!classDeclaration.heritageClauses || !classDeclaration.heritageClauses.length) {
    return classDeclaration;
  }

  const firstHeritageClause = classDeclaration.heritageClauses[0];

  const newFirstHeritageClauseTypes = helpers.replaceItem(
    firstHeritageClause.types,
    firstHeritageClause.types[0],
    ts.updateExpressionWithTypeArguments(
      firstHeritageClause.types[0],
      [propTypeRef, stateTypeRef],
      firstHeritageClause.types[0].expression,
    ),
  );

  const newHeritageClauses = helpers.replaceItem(
    classDeclaration.heritageClauses,
    firstHeritageClause,
    ts.updateHeritageClause(firstHeritageClause, newFirstHeritageClauseTypes),
  );

  return ts.updateClassDeclaration(
    classDeclaration,
    classDeclaration.decorators,
    classDeclaration.modifiers,
    classDeclaration.name,
    classDeclaration.typeParameters,
    newHeritageClauses,
    classDeclaration.members,
  );
}

function getStateTypeOfReactComponentClass(
  classDeclaration: ts.ClassDeclaration,
  typeChecker: ts.TypeChecker,
): ts.TypeNode {
  const initialState = getInitialStateFromClassDeclaration(classDeclaration, typeChecker);
  const initialStateIsVoid = initialState.kind === ts.SyntaxKind.VoidKeyword;
  const collectedStateTypes = getStateLookingForSetStateCalls(classDeclaration, typeChecker);
  if (!collectedStateTypes.length && initialStateIsVoid) {
    return ts.createTypeLiteralNode([]);
  }
  if (!initialStateIsVoid) {
    collectedStateTypes.push(initialState);
  }

  return ts.createUnionOrIntersectionTypeNode(ts.SyntaxKind.IntersectionType, collectedStateTypes);
}

/**
 * Get initial state of a React component looking for state value initially set
 * @param classDeclaration
 * @param typeChecker
 */
function getInitialStateFromClassDeclaration(
  classDeclaration: ts.ClassDeclaration,
  typeChecker: ts.TypeChecker,
): ts.TypeNode {
  // initial state class member

  const initialStateMember = helpers.find(classDeclaration.members, member => {
    try {
      return (
        helpers.isPropertyDeclaration(member) && member.name && member.name.getText() === 'state'
      );
    } catch (e) {
      return false;
    }
  });

  if (
    initialStateMember &&
    helpers.isPropertyDeclaration(initialStateMember) &&
    initialStateMember.initializer
  ) {
    const type = typeChecker.getTypeAtLocation(initialStateMember.initializer)!;

    return typeChecker.typeToTypeNode(type);
  }

  // Initial state in constructor
  const constructor = helpers.find(
    classDeclaration.members,
    member => member.kind === ts.SyntaxKind.Constructor,
  ) as ts.ConstructorDeclaration | undefined;

  if (constructor && constructor.body) {
    for (const statement of constructor.body.statements) {
      if (
        helpers.isExpressionStatement(statement) &&
        helpers.isBinaryExpression(statement.expression) &&
        statement.expression.left.getText() === 'this.state'
      ) {
        return typeChecker.typeToTypeNode(
          typeChecker.getTypeAtLocation(statement.expression.right),
        );
      }
    }
  }

  // No initial state, fall back to void
  return ts.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword);
}

/**
 * Look for setState() function calls to collect the state interface in a React class component
 * @param classDeclaration
 * @param typeChecker
 */
function getStateLookingForSetStateCalls(
  classDeclaration: ts.ClassDeclaration,
  typeChecker: ts.TypeChecker,
): ts.TypeNode[] {
  const typeNodes: ts.TypeNode[] = [];
  for (const member of classDeclaration.members) {
    if (member && helpers.isMethodDeclaration(member) && member.body) {
      lookForSetState(member.body);
    }
  }

  return typeNodes;

  function lookForSetState(node: ts.Node) {
    ts.forEachChild(node, lookForSetState);
    if (
      helpers.isExpressionStatement(node) &&
      helpers.isCallExpression(node.expression) &&
      node.expression.expression.getText().match(/setState/)
    ) {
      const type = typeChecker.getTypeAtLocation(node.expression.arguments[0]);
      typeNodes.push(typeChecker.typeToTypeNode(type));
    }
  }
}

function getPropsTypeOfReactComponentClass(
  classDeclaration: ts.ClassDeclaration,
  sourceFile: ts.SourceFile,
) {
  const staticPropTypesMember = helpers.find(classDeclaration.members, member => {
    return (
      helpers.isPropertyDeclaration(member) &&
      helpers.hasStaticModifier(member) &&
      helpers.isPropTypesMember(member, sourceFile)
    );
  });

  if (
    staticPropTypesMember !== undefined &&
    helpers.isPropertyDeclaration(staticPropTypesMember) && // check to satisfy type checker
    staticPropTypesMember.initializer &&
    helpers.isObjectLiteralExpression(staticPropTypesMember.initializer)
  ) {
    return buildInterfaceFromPropTypeObjectLiteral(staticPropTypesMember.initializer);
  }

  const staticPropTypesGetterMember = helpers.find(classDeclaration.members, member => {
    return (
      helpers.isGetAccessorDeclaration(member) &&
      helpers.hasStaticModifier(member) &&
      helpers.isPropTypesMember(member, sourceFile)
    );
  });

  if (
    staticPropTypesGetterMember !== undefined &&
    helpers.isGetAccessorDeclaration(staticPropTypesGetterMember) // check to satisfy typechecker
  ) {
    const returnStatement = helpers.find(staticPropTypesGetterMember.body.statements, statement =>
      helpers.isReturnStatement(statement),
    );
    if (
      returnStatement !== undefined &&
      helpers.isReturnStatement(returnStatement) && // check to satisfy typechecker
      returnStatement.expression &&
      helpers.isObjectLiteralExpression(returnStatement.expression)
    ) {
      return buildInterfaceFromPropTypeObjectLiteral(returnStatement.expression);
    }
  }

  return {
    type: ts.createTypeLiteralNode([]),
    typeDeclarations: [],
  };
}

/**
 * Build props interface from propTypes object
 * @example
 * {
 *   foo: React.PropTypes.string.isRequired
 * }
 *
 * becomes
 * {
 *  foo: string;
 * }
 * @param objectLiteral
 */
function buildInterfaceFromPropTypeObjectLiteral(objectLiteral: ts.ObjectLiteralExpression) {
  const typeMembersAndDecls = objectLiteral.properties
    // filter out:
    // {
    //   a() {},     // MethodDeclaration
    //   b,          // ShorthandPropertyAssignment
    //   ...c,       // SpreadAssignment
    //   get d() {}, // AccessorDeclaration
    // }
    .filter(ts.isPropertyAssignment)
    // Ignore children, React types have it
    .filter(property => property.name.getText() !== 'children')
    .map(propertyAssignment => {
      const initializer = propertyAssignment.initializer;
      const name = propertyAssignment.name.getText();
      const isRequired = isPropTypeRequired(initializer);
      const typeExpression = isRequired
        ? (initializer as PropertyAccessExpression).expression
        : initializer;
      const { type, typeDeclarations } = getTypeFromReactPropTypeExpression(name, typeExpression);

      const member = ts.createPropertySignature(
        [],
        name,
        isRequired ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken),
        type,
        undefined,
      );
      return { member, typeDeclarations };
    });

  return {
    type: ts.createTypeLiteralNode(typeMembersAndDecls.map(m => m.member)),
    typeDeclarations: typeMembersAndDecls.reduce(
      (res, current) => res.concat(current.typeDeclarations),
      [] as Array<ts.DeclarationStatement>,
    ),
  };
}

/**
 * Turns React.PropTypes.* into TypeScript type value
 *
 * @param node React propTypes value
 */
function getTypeFromReactPropTypeExpression(propertyKey: string, node: ts.Expression) {
  let type = null;
  let typeDeclarations: ts.DeclarationStatement[] = [];
  if (ts.isPropertyAccessExpression(node)) {
    /**
     * PropTypes.array,
     * PropTypes.bool,
     * PropTypes.func,
     * PropTypes.number,
     * PropTypes.object,
     * PropTypes.string,
     * PropTypes.symbol, (ignore)
     * PropTypes.node,
     * PropTypes.element,
     * PropTypes.any,
     */
    const text = node.getText().replace(/React\.PropTypes\./, '');

    if (/string/.test(text)) {
      type = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    } else if (/any/.test(text)) {
      type = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    } else if (/array/.test(text)) {
      type = ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
    } else if (/bool/.test(text)) {
      type = ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    } else if (/number/.test(text)) {
      type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    } else if (/object/.test(text)) {
      type = ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
    } else if (/node/.test(text)) {
      type = ts.createTypeReferenceNode('React.ReactNode', []);
    } else if (/element/.test(text)) {
      type = ts.createTypeReferenceNode('JSX.Element', []);
    } else if (/func/.test(text)) {
      const arrayOfAny = ts.createParameter(
        [],
        [],
        ts.createToken(ts.SyntaxKind.DotDotDotToken),
        'args',
        undefined,
        ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)),
        undefined,
      );
      type = ts.createFunctionTypeNode(
        [],
        [arrayOfAny],
        ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
      );
    }
  } else if (ts.isCallExpression(node)) {
    /**
     * PropTypes.instanceOf(), (ignore)
     * PropTypes.oneOf(),
     * PropTypes.oneOfType(),
     * PropTypes.arrayOf(),
     * PropTypes.objectOf(),
     * PropTypes.shape(),
     */
    const text = node.expression.getText();
    if (/oneOf/.test(text)) {
      const argument = node.arguments[0];
      if (ts.isArrayLiteralExpression(argument)) {
        if (argument.elements.every(elm => ts.isStringLiteral(elm) || ts.isNumericLiteral(elm))) {
          type = ts.createUnionTypeNode(
            (argument.elements as ts.NodeArray<ts.StringLiteral | ts.NumericLiteral>).map(elm =>
              ts.createLiteralTypeNode(elm)
            ),
          )
        }
      }
    } else if (/oneOfType/.test(text)) {
      const argument = node.arguments[0];
      if (ts.isArrayLiteralExpression(argument)) {
        type = ts.createUnionOrIntersectionTypeNode(
          ts.SyntaxKind.UnionType,
          argument.elements.map(elm => getTypeFromReactPropTypeExpression(propertyKey, elm).type),
        );
      }
    } else if (/arrayOf/.test(text)) {
      // TODO:
    } else if (/objectOf/.test(text)) {
    } else if (/shape/.test(text)) {
    }
  }

  /**
   * customProp,
   * anything others
   */
  if (type === null) {
    type = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
  }

  return { type, typeDeclarations };
}

/**
 * Decide if node is optional
 * @param node React propTypes member node
 */
function isPropTypeRequired(node: ts.Expression) {
  if (!ts.isPropertyAccessExpression(node)) return false;

  const text = node.getText().replace(/React\.PropTypes\./, '');
  return /\.isRequired/.test(text);
}

function visitReactStatelessComponent(
  component: ts.FunctionDeclaration | ts.VariableStatement,
  propTypesExpressionStatement: ts.ExpressionStatement,
  sourceFile: ts.SourceFile,
) {
  let arrowFuncComponent = helpers.convertReactStatelessFunctionToArrowFunction(component)
  let componentName = arrowFuncComponent.declarationList.declarations[0].name.getText()
  let componentInitializer =  arrowFuncComponent.declarationList.declarations[0].initializer

  // generate component props interface from propTypes
  const { type: propType, typeDeclarations } = getPropTypesFromTypeAssignment(propTypesExpressionStatement)

  const propTypeName = `${componentName}Props`;
  const propTypeDeclaration = ts.createTypeAliasDeclaration([], [], propTypeName, [], propType);
  const propTypeRef = ts.createTypeReferenceNode(propTypeName, []);

  let componentType = ts.createTypeReferenceNode(
    ts.createQualifiedName(ts.createIdentifier('React'), 'SFC'),
    [propTypeRef]
  )

  // replace component with ts stateless component
  const typedComponent = ts.createVariableStatement(
    undefined,
    ts.createVariableDeclarationList(
      [ts.createVariableDeclaration(
        componentName,
        componentType,
        componentInitializer,
      )],
      arrowFuncComponent.declarationList.flags
    )
  );

  const allTypeDeclarations = [...typeDeclarations, propTypeDeclaration];
  let statements = helpers.insertBefore(
    sourceFile.statements,
    component,
    allTypeDeclarations,
  );

  statements = helpers.replaceItem(statements, component, typedComponent);
  return ts.updateSourceFileNode(sourceFile, statements);
}

function getPropTypesFromTypeAssignment(propTypesExpressionStatement: ts.ExpressionStatement) {
    if (
    propTypesExpressionStatement !== undefined &&
    ts.isBinaryExpression(propTypesExpressionStatement.expression) &&
    helpers.isObjectLiteralExpression(propTypesExpressionStatement.expression.right)
  ) {
    return buildInterfaceFromPropTypeObjectLiteral(propTypesExpressionStatement.expression.right);
  }

  return {
    type: ts.createTypeLiteralNode([]),
    typeDeclarations: [],
  };
}
