import * as ts from 'typescript';
import { find, findIndex, some, indexOf, slice } from 'lodash';
import * as kinds from './isKind';

export * from './isKind';

/**
 * If a class declaration a react class?
 * @param classDeclaration
 * @param typeChecker
 */
export function isReactComponent(
  classDeclaration: ts.ClassDeclaration,
  typeChecker: ts.TypeChecker,
): boolean {
  // Only classes that extend React.Component
  if (!classDeclaration.heritageClauses) {
    return false;
  }
  if (classDeclaration.heritageClauses.length !== 1) {
    return false;
  }

  const firstHeritageClauses = classDeclaration.heritageClauses[0];

  if (firstHeritageClauses.token !== ts.SyntaxKind.ExtendsKeyword) {
    return false;
  }

  const expressionWithTypeArguments = firstHeritageClauses.types[0];

  if (!expressionWithTypeArguments) {
    return false;
  }

  // Try type checker and fallback to node text
  const type = typeChecker.getTypeAtLocation(expressionWithTypeArguments);
  let typeSymbol = type && type.symbol && type.symbol.name;
  if (!typeSymbol) {
    typeSymbol = expressionWithTypeArguments.expression.getText();
  }

  if (!/React\.Component|Component/.test(typeSymbol)) {
    return false;
  }

  return true;
}

/**
 * Determine if a ts.HeritageClause is React HeritageClause
 *
 * @example `extends React.Component<{}, {}>` is a React HeritageClause
 *
 * @todo: this is lazy. Use the typeChecker instead
 * @param clause
 */
export function isReactHeritageClause(clause: ts.HeritageClause) {
  return (
    clause.token === ts.SyntaxKind.ExtendsKeyword &&
    clause.types.length === 1 &&
    kinds.isExpressionWithTypeArguments(clause.types[0]) &&
    /Component/.test(clause.types[0].expression.getText())
  );
}

/**
 * Return true if a statement is a React propType assignment statement
 * @example
 * SomeComponent.propTypes = { foo: React.PropTypes.string };
 * @param statement
 */
export function isReactPropTypeAssignmentStatement(statement: ts.Node) {
  return (
    ts.isExpressionStatement(statement) &&
    ts.isBinaryExpression(statement.expression) &&
    statement.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
    ts.isPropertyAccessExpression(statement.expression.left) &&
    /\.propTypes$|\.propTypes\..+$/.test(statement.expression.left.getText())
  );
}

/**
 * Does class member have a "static" member?
 * @param classMember
 */
export function hasStaticModifier(classMember: ts.ClassElement) {
  if (!classMember.modifiers) {
    return false;
  }

  const staticModifier = find(classMember.modifiers, modifier => {
    return modifier.kind == ts.SyntaxKind.StaticKeyword;
  });
  return staticModifier !== undefined;
}

/**
 * Is class member a React "propTypes" member?
 * @param classMember
 */
export function isPropTypesMember(classMember: ts.ClassElement, sourceFile: ts.SourceFile) {
  // classMember.name.getText() will failed in end-to-end tests
  const text =
    classMember.name !== undefined &&
    !ts.isComputedPropertyName(classMember.name) &&
    classMember.name.text;
  // console.log('text', text);
  return text === 'propTypes';
}

export function convertReactStatelessFunctionToArrowFunction(
  statelessFunc: ts.FunctionDeclaration | ts.VariableStatement
) {
  if (ts.isVariableStatement(statelessFunc)) return statelessFunc

  const funcName = statelessFunc.name || 'Component'
  const funcBody = statelessFunc.body || ts.createBlock([])

  const initializer = ts.createArrowFunction(
    undefined,
    undefined,
    statelessFunc.parameters,
    undefined,
    // ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
    undefined,
    funcBody,
  )

  return ts.createVariableStatement(
    undefined,
    ts.createVariableDeclarationList(
      [ts.createVariableDeclaration(funcName, undefined, initializer)],
      // TODO: Why this doesn't work?
      ts.NodeFlags.Const,
    )
  )
}

// TODO: replace following functions with Lodash?

export { find, some as has };

// export const has = some

/**
 * Insert an item in middle of an array after a specific item
 * @param collection
 * @param afterItem
 * @param newItem
 */
export function insertAfter<T>(collection: ArrayLike<T>, afterItem: T, newItem: T) {
  const index = indexOf(collection, afterItem) + 1;

  return slice(collection, 0, index)
    .concat(newItem)
    .concat(slice(collection, index));
}

/**
 * Insert an item in middle of an array before a specific item
 * @param collection
 * @param beforeItem
 * @param newItem
 */
export function insertBefore<T>(collection: ArrayLike<T>, beforeItem: T, newItems: T | T[]) {
  const index = indexOf(collection, beforeItem);

  return slice(collection, 0, index)
    .concat(newItems)
    .concat(slice(collection, index));
}

/**
 * Replace an item in a collection with another item
 * @param collection
 * @param item
 * @param newItem
 */
export function replaceItem<T>(collection: ArrayLike<T>, item: T, newItem: T) {
  const index = indexOf(collection, item);
  return slice(collection, 0, index)
    .concat(newItem)
    .concat(slice(collection, index + 1));
}

/**
 * Remove an item from a collection
 * @param collection
 * @param item
 * @param newItem
 */
export function removeItem<T>(collection: ArrayLike<T>, item: T) {
  const index = indexOf(collection, item);
  return slice(collection, 0, index).concat(slice(collection, index + 1));
}
