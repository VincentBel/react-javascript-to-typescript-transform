"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var helpers = require("../helpers");
/**
 * Collapse unnecessary intersections between type literals
 *
 * @example
 * Before:
 * type Foo = {foo: string;} & {bar: number;}
 *
 * After
 * type Foo = {foo: string; bar: number;}
 */
function collapseIntersectionInterfacesTransformFactoryFactory(typeChecker) {
    return function collapseIntersectionInterfacesTransformFactory(context) {
        return function collapseIntersectionInterfacesTransform(sourceFile) {
            var visited = ts.visitEachChild(sourceFile, visitor, context);
            ts.addEmitHelpers(visited, context.readEmitHelpers());
            return visited;
            function visitor(node) {
                if (helpers.isTypeAliasDeclaration(node)) {
                    return visitTypeAliasDeclaration(node);
                }
                return node;
            }
            function visitTypeAliasDeclaration(node) {
                if (helpers.isIntersectionTypeNode(node.type)
                    && node.type.types.every(function (type) { return helpers.isTypeLiteralNode(type); })) {
                    var allMembers = node.type.types
                        .map(function (type) { return type.members; })
                        .reduce(function (all, members) { return ts.createNodeArray(all.concat(members)); }, ts.createNodeArray([]));
                    return ts.createTypeAliasDeclaration([], [], node.name.text, [], ts.createTypeLiteralNode(allMembers));
                }
                return node;
            }
        };
    };
}
exports.collapseIntersectionInterfacesTransformFactoryFactory = collapseIntersectionInterfacesTransformFactoryFactory;
//# sourceMappingURL=collapse-intersection-interfaces-transform.js.map