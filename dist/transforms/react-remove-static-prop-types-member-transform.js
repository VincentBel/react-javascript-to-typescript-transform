"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var helpers = require("../helpers");
/**
 * Remove static propTypes
 *
 * @example
 * Before:
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {
 *   static propTypes = {
 *      foo: React.PropTypes.number.isRequired,
 *   }
 * }
 *
 * After:
 * class SomeComponent extends React.Component<{foo: number;}, {bar: string;}> {}
 */
function reactRemoveStaticPropTypesMemberTransformFactoryFactory(typeChecker) {
    return function reactRemoveStaticPropTypesMemberTransformFactory(context) {
        return function reactRemoveStaticPropTypesMemberTransform(sourceFile) {
            return ts.visitEachChild(sourceFile, visitor, context);
            function visitor(node) {
                if (helpers.isClassDeclaration(node) && helpers.isReactComponent(node, typeChecker)) {
                    return ts.updateClassDeclaration(node, node.decorators, node.modifiers, node.name, node.typeParameters, ts.createNodeArray(node.heritageClauses), node.members.filter(function (member) {
                        if (helpers.isPropertyDeclaration(member)
                            && helpers.hasStaticModifier(member)
                            && helpers.isPropTypesMember(member, sourceFile)) {
                            // console.log('remove propType member');
                            return false;
                        }
                        // propTypes getter
                        if (helpers.isGetAccessorDeclaration(member)
                            && helpers.hasStaticModifier(member)
                            && helpers.isPropTypesMember(member, sourceFile)) {
                            // console.log('remove get propType member');
                            return false;
                        }
                        return true;
                    }));
                }
                return node;
            }
        };
    };
}
exports.reactRemoveStaticPropTypesMemberTransformFactoryFactory = reactRemoveStaticPropTypesMemberTransformFactoryFactory;
//# sourceMappingURL=react-remove-static-prop-types-member-transform.js.map