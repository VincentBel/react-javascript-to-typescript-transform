"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var helpers = require("../helpers");
/**
 * Get transform for transforming React code originally written in JS which does not have
 * props and state generic types
 * This transform will remove React component static "propTypes" member during transform
 */
function reactJSMakePropsAndStateInterfaceTransformFactoryFactory(typeChecker) {
    return function reactJSMakePropsAndStateInterfaceTransformFactory(context) {
        return function reactJSMakePropsAndStateInterfaceTransform(sourceFile) {
            var visited = visitSourceFile(sourceFile);
            ts.addEmitHelpers(visited, context.readEmitHelpers());
            return visited;
            function visitSourceFile(sourceFile) {
                for (var _i = 0, _a = sourceFile.statements; _i < _a.length; _i++) {
                    var statement = _a[_i];
                    if (helpers.isClassDeclaration(statement) &&
                        helpers.isReactComponent(statement, typeChecker)) {
                        return visitReactClassDeclaration(statement, sourceFile, typeChecker);
                    }
                }
                var _loop_1 = function (statement) {
                    if (ts.isExpressionStatement(statement) &&
                        ts.isBinaryExpression(statement.expression) &&
                        helpers.isReactPropTypeAssignmentStatement(statement)) {
                        var componentName_1 = ts.isPropertyAccessExpression(statement.expression.left)
                            ? statement.expression.left.expression.getText()
                            : '';
                        var component = helpers.find(sourceFile.statements, function (s) {
                            return (ts.isFunctionDeclaration(s) && s.name !== undefined && s.name.getText() === componentName_1) ||
                                (ts.isVariableStatement(s) && s.declarationList.declarations[0].name.getText() === componentName_1);
                        });
                        if (component) {
                            return { value: visitReactStatelessComponent(component, statement, sourceFile) };
                        }
                    }
                };
                for (var _b = 0, _c = sourceFile.statements; _b < _c.length; _b++) {
                    var statement = _c[_b];
                    var state_1 = _loop_1(statement);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
                return sourceFile;
            }
        };
    };
}
exports.reactJSMakePropsAndStateInterfaceTransformFactoryFactory = reactJSMakePropsAndStateInterfaceTransformFactoryFactory;
function visitReactClassDeclaration(classDeclaration, sourceFile, typeChecker) {
    if (!classDeclaration.heritageClauses || !classDeclaration.heritageClauses.length) {
        return sourceFile;
    }
    var className = classDeclaration && classDeclaration.name && classDeclaration.name.getText(sourceFile);
    var _a = getPropsTypeOfReactComponentClass(classDeclaration, sourceFile), propType = _a.type, typeDeclarations = _a.typeDeclarations;
    var stateType = getStateTypeOfReactComponentClass(classDeclaration, typeChecker);
    var propTypeName = className + "Props";
    var stateTypeName = className + "State";
    var propTypeDeclaration = ts.createTypeAliasDeclaration([], [], propTypeName, [], propType);
    var stateTypeDeclaration = ts.createTypeAliasDeclaration([], [], stateTypeName, [], stateType);
    var propTypeRef = ts.createTypeReferenceNode(propTypeName, []);
    var stateTypeRef = ts.createTypeReferenceNode(stateTypeName, []);
    var newClassDeclaration = getNewReactClassDeclaration(classDeclaration, propTypeRef, stateTypeRef);
    var allTypeDeclarations = typeDeclarations.concat([propTypeDeclaration, stateTypeDeclaration]);
    var statements = helpers.insertBefore(sourceFile.statements, classDeclaration, allTypeDeclarations);
    statements = helpers.replaceItem(statements, classDeclaration, newClassDeclaration);
    return ts.updateSourceFileNode(sourceFile, statements);
}
function getNewReactClassDeclaration(classDeclaration, propTypeRef, stateTypeRef) {
    if (!classDeclaration.heritageClauses || !classDeclaration.heritageClauses.length) {
        return classDeclaration;
    }
    var firstHeritageClause = classDeclaration.heritageClauses[0];
    var newFirstHeritageClauseTypes = helpers.replaceItem(firstHeritageClause.types, firstHeritageClause.types[0], ts.updateExpressionWithTypeArguments(firstHeritageClause.types[0], [propTypeRef, stateTypeRef], firstHeritageClause.types[0].expression));
    var newHeritageClauses = helpers.replaceItem(classDeclaration.heritageClauses, firstHeritageClause, ts.updateHeritageClause(firstHeritageClause, newFirstHeritageClauseTypes));
    return ts.updateClassDeclaration(classDeclaration, classDeclaration.decorators, classDeclaration.modifiers, classDeclaration.name, classDeclaration.typeParameters, newHeritageClauses, classDeclaration.members);
}
function getStateTypeOfReactComponentClass(classDeclaration, typeChecker) {
    var initialState = getInitialStateFromClassDeclaration(classDeclaration, typeChecker);
    var initialStateIsVoid = initialState.kind === ts.SyntaxKind.VoidKeyword;
    var collectedStateTypes = getStateLookingForSetStateCalls(classDeclaration, typeChecker);
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
function getInitialStateFromClassDeclaration(classDeclaration, typeChecker) {
    // initial state class member
    var initialStateMember = helpers.find(classDeclaration.members, function (member) {
        try {
            return (helpers.isPropertyDeclaration(member) && member.name && member.name.getText() === 'state');
        }
        catch (e) {
            return false;
        }
    });
    if (initialStateMember &&
        helpers.isPropertyDeclaration(initialStateMember) &&
        initialStateMember.initializer) {
        var type = typeChecker.getTypeAtLocation(initialStateMember.initializer);
        return typeChecker.typeToTypeNode(type);
    }
    // Initial state in constructor
    var constructor = helpers.find(classDeclaration.members, function (member) { return member.kind === ts.SyntaxKind.Constructor; });
    if (constructor && constructor.body) {
        for (var _i = 0, _a = constructor.body.statements; _i < _a.length; _i++) {
            var statement = _a[_i];
            if (helpers.isExpressionStatement(statement) &&
                helpers.isBinaryExpression(statement.expression) &&
                statement.expression.left.getText() === 'this.state') {
                return typeChecker.typeToTypeNode(typeChecker.getTypeAtLocation(statement.expression.right));
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
function getStateLookingForSetStateCalls(classDeclaration, typeChecker) {
    var typeNodes = [];
    for (var _i = 0, _a = classDeclaration.members; _i < _a.length; _i++) {
        var member = _a[_i];
        if (member && helpers.isMethodDeclaration(member) && member.body) {
            lookForSetState(member.body);
        }
    }
    return typeNodes;
    function lookForSetState(node) {
        ts.forEachChild(node, lookForSetState);
        if (helpers.isExpressionStatement(node) &&
            helpers.isCallExpression(node.expression) &&
            node.expression.expression.getText().match(/setState/)) {
            var type = typeChecker.getTypeAtLocation(node.expression.arguments[0]);
            typeNodes.push(typeChecker.typeToTypeNode(type));
        }
    }
}
function getPropsTypeOfReactComponentClass(classDeclaration, sourceFile) {
    var staticPropTypesMember = helpers.find(classDeclaration.members, function (member) {
        return (helpers.isPropertyDeclaration(member) &&
            helpers.hasStaticModifier(member) &&
            helpers.isPropTypesMember(member, sourceFile));
    });
    if (staticPropTypesMember !== undefined &&
        helpers.isPropertyDeclaration(staticPropTypesMember) && // check to satisfy type checker
        staticPropTypesMember.initializer &&
        helpers.isObjectLiteralExpression(staticPropTypesMember.initializer)) {
        return buildInterfaceFromPropTypeObjectLiteral(staticPropTypesMember.initializer);
    }
    var staticPropTypesGetterMember = helpers.find(classDeclaration.members, function (member) {
        return (helpers.isGetAccessorDeclaration(member) &&
            helpers.hasStaticModifier(member) &&
            helpers.isPropTypesMember(member, sourceFile));
    });
    if (staticPropTypesGetterMember !== undefined &&
        helpers.isGetAccessorDeclaration(staticPropTypesGetterMember) // check to satisfy typechecker
    ) {
        var returnStatement = helpers.find(staticPropTypesGetterMember.body.statements, function (statement) {
            return helpers.isReturnStatement(statement);
        });
        if (returnStatement !== undefined &&
            helpers.isReturnStatement(returnStatement) && // check to satisfy typechecker
            returnStatement.expression &&
            helpers.isObjectLiteralExpression(returnStatement.expression)) {
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
function buildInterfaceFromPropTypeObjectLiteral(objectLiteral) {
    var typeMembersAndDecls = objectLiteral.properties
        .filter(ts.isPropertyAssignment)
        .filter(function (property) { return property.name.getText() !== 'children'; })
        .map(function (propertyAssignment) {
        var initializer = propertyAssignment.initializer;
        var name = propertyAssignment.name.getText();
        var isRequired = isPropTypeRequired(initializer);
        var typeExpression = isRequired
            ? initializer.expression
            : initializer;
        var _a = getTypeFromReactPropTypeExpression(name, typeExpression), type = _a.type, typeDeclarations = _a.typeDeclarations;
        var member = ts.createPropertySignature([], name, isRequired ? undefined : ts.createToken(ts.SyntaxKind.QuestionToken), type, undefined);
        return { member: member, typeDeclarations: typeDeclarations };
    });
    return {
        type: ts.createTypeLiteralNode(typeMembersAndDecls.map(function (m) { return m.member; })),
        typeDeclarations: typeMembersAndDecls.reduce(function (res, current) { return res.concat(current.typeDeclarations); }, []),
    };
}
/**
 * Turns React.PropTypes.* into TypeScript type value
 *
 * @param node React propTypes value
 */
function getTypeFromReactPropTypeExpression(propertyKey, node) {
    var type = null;
    var typeDeclarations = [];
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
        var text = node.getText().replace(/React\.PropTypes\./, '');
        if (/string/.test(text)) {
            type = ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
        }
        else if (/any/.test(text)) {
            type = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
        }
        else if (/array/.test(text)) {
            type = ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
        }
        else if (/bool/.test(text)) {
            type = ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
        }
        else if (/number/.test(text)) {
            type = ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
        }
        else if (/object/.test(text)) {
            type = ts.createKeywordTypeNode(ts.SyntaxKind.ObjectKeyword);
        }
        else if (/node/.test(text)) {
            type = ts.createTypeReferenceNode('React.ReactNode', []);
        }
        else if (/element/.test(text)) {
            type = ts.createTypeReferenceNode('JSX.Element', []);
        }
        else if (/func/.test(text)) {
            var arrayOfAny = ts.createParameter([], [], ts.createToken(ts.SyntaxKind.DotDotDotToken), 'args', undefined, ts.createArrayTypeNode(ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)), undefined);
            type = ts.createFunctionTypeNode([], [arrayOfAny], ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword));
        }
    }
    else if (ts.isCallExpression(node)) {
        /**
         * PropTypes.instanceOf(), (ignore)
         * PropTypes.oneOf(),
         * PropTypes.oneOfType(),
         * PropTypes.arrayOf(),
         * PropTypes.objectOf(),
         * PropTypes.shape(),
         */
        var text = node.expression.getText();
        if (/oneOf/.test(text)) {
            var argument = node.arguments[0];
            if (ts.isArrayLiteralExpression(argument)) {
                if (argument.elements.every(function (elm) { return ts.isStringLiteral(elm) || ts.isNumericLiteral(elm); })) {
                    type = ts.createUnionTypeNode(argument.elements.map(function (elm) {
                        return ts.createLiteralTypeNode(elm);
                    }));
                }
            }
        }
        else if (/oneOfType/.test(text)) {
            var argument = node.arguments[0];
            if (ts.isArrayLiteralExpression(argument)) {
                type = ts.createUnionOrIntersectionTypeNode(ts.SyntaxKind.UnionType, argument.elements.map(function (elm) { return getTypeFromReactPropTypeExpression(propertyKey, elm).type; }));
            }
        }
        else if (/arrayOf/.test(text)) {
            // TODO:
        }
        else if (/objectOf/.test(text)) {
        }
        else if (/shape/.test(text)) {
        }
    }
    /**
     * customProp,
     * anything others
     */
    if (type === null) {
        type = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);
    }
    return { type: type, typeDeclarations: typeDeclarations };
}
/**
 * Decide if node is optional
 * @param node React propTypes member node
 */
function isPropTypeRequired(node) {
    if (!ts.isPropertyAccessExpression(node))
        return false;
    var text = node.getText().replace(/React\.PropTypes\./, '');
    return /\.isRequired/.test(text);
}
function visitReactStatelessComponent(component, propTypesExpressionStatement, sourceFile) {
    var arrowFuncComponent = helpers.convertReactStatelessFunctionToArrowFunction(component);
    var componentName = arrowFuncComponent.declarationList.declarations[0].name.getText();
    var componentInitializer = arrowFuncComponent.declarationList.declarations[0].initializer;
    // generate component props interface from propTypes
    var _a = getPropTypesFromTypeAssignment(propTypesExpressionStatement), propType = _a.type, typeDeclarations = _a.typeDeclarations;
    var propTypeName = componentName + "Props";
    var propTypeDeclaration = ts.createTypeAliasDeclaration([], [], propTypeName, [], propType);
    var propTypeRef = ts.createTypeReferenceNode(propTypeName, []);
    var componentType = ts.createTypeReferenceNode(ts.createQualifiedName(ts.createIdentifier('React'), 'SFC'), [propTypeRef]);
    // replace component with ts stateless component
    var typedComponent = ts.createVariableStatement(undefined, ts.createVariableDeclarationList([ts.createVariableDeclaration(componentName, componentType, componentInitializer)], arrowFuncComponent.declarationList.flags));
    var allTypeDeclarations = typeDeclarations.concat([propTypeDeclaration]);
    var statements = helpers.insertBefore(sourceFile.statements, component, allTypeDeclarations);
    statements = helpers.replaceItem(statements, component, typedComponent);
    return ts.updateSourceFileNode(sourceFile, statements);
}
function getPropTypesFromTypeAssignment(propTypesExpressionStatement) {
    if (propTypesExpressionStatement !== undefined &&
        ts.isBinaryExpression(propTypesExpressionStatement.expression) &&
        helpers.isObjectLiteralExpression(propTypesExpressionStatement.expression.right)) {
        return buildInterfaceFromPropTypeObjectLiteral(propTypesExpressionStatement.expression.right);
    }
    return {
        type: ts.createTypeLiteralNode([]),
        typeDeclarations: [],
    };
}
//# sourceMappingURL=react-js-make-props-and-state-transform.js.map