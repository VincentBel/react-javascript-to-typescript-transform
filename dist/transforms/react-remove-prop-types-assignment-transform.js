"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var helpers = require("../helpers");
/**
 * Remove Component.propTypes statements
 *
 * @example
 * Before:
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {}
 * SomeComponent.propTypes = { foo: React.PropTypes.string }
 *
 * After
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {}
 */
function reactRemovePropTypesAssignmentTransformFactoryFactory(typeChecker) {
    return function reactRemovePropTypesAssignmentTransformFactory(context) {
        return function reactRemovePropTypesAssignmentTransform(sourceFile) {
            return ts.updateSourceFileNode(sourceFile, sourceFile.statements.filter(function (s) { return !helpers.isReactPropTypeAssignmentStatement(s); }));
        };
    };
}
exports.reactRemovePropTypesAssignmentTransformFactoryFactory = reactRemovePropTypesAssignmentTransformFactoryFactory;
//# sourceMappingURL=react-remove-prop-types-assignment-transform.js.map