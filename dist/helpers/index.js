"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var lodash_1 = require("lodash");
exports.find = lodash_1.find;
exports.has = lodash_1.some;
var kinds = require("./isKind");
__export(require("./isKind"));
/**
 * If a class declaration a react class?
 * @param classDeclaration
 * @param typeChecker
 */
function isReactComponent(classDeclaration, typeChecker) {
    // Only classes that extend React.Component
    if (!classDeclaration.heritageClauses) {
        return false;
    }
    if (classDeclaration.heritageClauses.length !== 1) {
        return false;
    }
    var firstHeritageClauses = classDeclaration.heritageClauses[0];
    if (firstHeritageClauses.token !== ts.SyntaxKind.ExtendsKeyword) {
        return false;
    }
    var expressionWithTypeArguments = firstHeritageClauses.types[0];
    if (!expressionWithTypeArguments) {
        return false;
    }
    // Try type checker and fallback to node text
    var type = typeChecker.getTypeAtLocation(expressionWithTypeArguments);
    var typeSymbol = type && type.symbol && type.symbol.name;
    if (!typeSymbol) {
        typeSymbol = expressionWithTypeArguments.expression.getText();
    }
    if (!/React\.Component|Component/.test(typeSymbol)) {
        return false;
    }
    return true;
}
exports.isReactComponent = isReactComponent;
/**
 * Determine if a ts.HeritageClause is React HeritageClause
 *
 * @example `extends React.Component<{}, {}>` is a React HeritageClause
 *
 * @todo: this is lazy. Use the typeChecker instead
 * @param clause
 */
function isReactHeritageClause(clause) {
    return (clause.token === ts.SyntaxKind.ExtendsKeyword &&
        clause.types.length === 1 &&
        kinds.isExpressionWithTypeArguments(clause.types[0]) &&
        /Component/.test(clause.types[0].expression.getText()));
}
exports.isReactHeritageClause = isReactHeritageClause;
/**
 * Return true if a statement is a React propType assignment statement
 * @example
 * SomeComponent.propTypes = { foo: React.PropTypes.string };
 * @param statement
 */
function isReactPropTypeAssignmentStatement(statement) {
    return (ts.isExpressionStatement(statement) &&
        ts.isBinaryExpression(statement.expression) &&
        statement.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
        ts.isPropertyAccessExpression(statement.expression.left) &&
        /\.propTypes$|\.propTypes\..+$/.test(statement.expression.left.getText()));
}
exports.isReactPropTypeAssignmentStatement = isReactPropTypeAssignmentStatement;
/**
 * Does class member have a "static" member?
 * @param classMember
 */
function hasStaticModifier(classMember) {
    if (!classMember.modifiers) {
        return false;
    }
    var staticModifier = lodash_1.find(classMember.modifiers, function (modifier) {
        return modifier.kind == ts.SyntaxKind.StaticKeyword;
    });
    return staticModifier !== undefined;
}
exports.hasStaticModifier = hasStaticModifier;
/**
 * Is class member a React "propTypes" member?
 * @param classMember
 */
function isPropTypesMember(classMember, sourceFile) {
    // classMember.name.getText() will failed in end-to-end tests
    var text = classMember.name !== undefined &&
        !ts.isComputedPropertyName(classMember.name) &&
        classMember.name.text;
    // console.log('text', text);
    return text === 'propTypes';
}
exports.isPropTypesMember = isPropTypesMember;
function convertReactStatelessFunctionToArrowFunction(statelessFunc) {
    if (ts.isVariableStatement(statelessFunc))
        return statelessFunc;
    var funcName = statelessFunc.name || 'Component';
    var funcBody = statelessFunc.body || ts.createBlock([]);
    var initializer = ts.createArrowFunction(undefined, undefined, statelessFunc.parameters, undefined, 
    // ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
    undefined, funcBody);
    return ts.createVariableStatement(undefined, ts.createVariableDeclarationList([ts.createVariableDeclaration(funcName, undefined, initializer)], ts.NodeFlags.Const));
}
exports.convertReactStatelessFunctionToArrowFunction = convertReactStatelessFunctionToArrowFunction;
// export const has = some
/**
 * Insert an item in middle of an array after a specific item
 * @param collection
 * @param afterItem
 * @param newItem
 */
function insertAfter(collection, afterItem, newItem) {
    var index = lodash_1.indexOf(collection, afterItem) + 1;
    return lodash_1.slice(collection, 0, index)
        .concat(newItem)
        .concat(lodash_1.slice(collection, index));
}
exports.insertAfter = insertAfter;
/**
 * Insert an item in middle of an array before a specific item
 * @param collection
 * @param beforeItem
 * @param newItem
 */
function insertBefore(collection, beforeItem, newItems) {
    var index = lodash_1.indexOf(collection, beforeItem);
    return lodash_1.slice(collection, 0, index)
        .concat(newItems)
        .concat(lodash_1.slice(collection, index));
}
exports.insertBefore = insertBefore;
/**
 * Replace an item in a collection with another item
 * @param collection
 * @param item
 * @param newItem
 */
function replaceItem(collection, item, newItem) {
    var index = lodash_1.indexOf(collection, item);
    return lodash_1.slice(collection, 0, index)
        .concat(newItem)
        .concat(lodash_1.slice(collection, index + 1));
}
exports.replaceItem = replaceItem;
/**
 * Remove an item from a collection
 * @param collection
 * @param item
 * @param newItem
 */
function removeItem(collection, item) {
    var index = lodash_1.indexOf(collection, item);
    return lodash_1.slice(collection, 0, index).concat(lodash_1.slice(collection, index + 1));
}
exports.removeItem = removeItem;
//# sourceMappingURL=index.js.map