"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var helpers = require("../helpers");
/**
 * Move Component.propTypes statements into class as a static member of the class
 * if React component is defined using a class
 *
 * Note: This transform assumes React component declaration and propTypes assignment statement
 * are both on root of the source file
 *
 * @example
 * Before:
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {}
 * SomeComponent.propTypes = { foo: React.PropTypes.string }
 *
 * After
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {
 *   static propTypes = { foo: React.PropTypes.string }
 * }
 *
 * @todo
 * This is not supporting multiple statements for a single class yet
 * ```
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {}
 * SomeComponent.propTypes = { foo: React.PropTypes.string }
 * SomeComponent.propTypes.bar = React.PropTypes.number;
 * ```
 */
function reactMovePropTypesToClassTransformFactoryFactory(typeChecker) {
    return function reactMovePropTypesToClassTransformFactory(context) {
        return function reactMovePropTypesToClassTransform(sourceFile) {
            return visitSourceFile(sourceFile, typeChecker);
        };
    };
}
exports.reactMovePropTypesToClassTransformFactoryFactory = reactMovePropTypesToClassTransformFactoryFactory;
/**
 * Make the move from propType statement to static member
 * @param sourceFile
 * @param typeChecker
 */
function visitSourceFile(sourceFile, typeChecker) {
    var statements = sourceFile.statements;
    // Look for propType assignment statements
    var propTypeAssignments = statements.filter(function (statement) { return helpers.isReactPropTypeAssignmentStatement(statement); });
    var _loop_1 = function (propTypeAssignment) {
        // Look for the class declarations with the same name
        var componentName = getComponentName(propTypeAssignment, sourceFile);
        var classStatement = helpers.find(statements, function (statement) { return helpers.isClassDeclaration(statement) &&
            statement.name !== undefined &&
            statement.name.getText(sourceFile) === componentName; }); // Type weirdness
        // && helpers.isBinaryExpression(propTypeAssignment.expression) is redundant to satisfy the type checker
        if (classStatement && helpers.isBinaryExpression(propTypeAssignment.expression)) {
            // console.log('add static member');
            var newClassStatement = addStaticMemberToClass(classStatement, 'propTypes', propTypeAssignment.expression.right);
            statements = ts.createNodeArray(helpers.replaceItem(sourceFile.statements, classStatement, newClassStatement));
        }
    };
    for (var _i = 0, propTypeAssignments_1 = propTypeAssignments; _i < propTypeAssignments_1.length; _i++) {
        var propTypeAssignment = propTypeAssignments_1[_i];
        _loop_1(propTypeAssignment);
    }
    return ts.updateSourceFileNode(sourceFile, statements);
}
/**
 * Get component name off of a propType assignment statement
 * @param propTypeAssignment
 * @param sourceFile
 */
function getComponentName(propTypeAssignment, sourceFile) {
    var text = propTypeAssignment.getText(sourceFile);
    return text.substr(0, text.indexOf('.'));
}
/**
 * Insert a new static member into a class
 * @param classDeclaration
 * @param name
 * @param value
 */
function addStaticMemberToClass(classDeclaration, name, value) {
    var staticModifier = ts.createToken(ts.SyntaxKind.StaticKeyword);
    var propertyDeclaration = ts.createProperty([], [staticModifier], name, undefined, undefined, value);
    return ts.updateClassDeclaration(classDeclaration, classDeclaration.decorators, classDeclaration.modifiers, classDeclaration.name, classDeclaration.typeParameters, ts.createNodeArray(classDeclaration.heritageClauses), ts.createNodeArray([propertyDeclaration].concat(classDeclaration.members)));
}
//# sourceMappingURL=react-move-prop-types-to-class-transform.js.map