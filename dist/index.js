"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("./compiler");
exports.compile = compiler_1.compile;
var react_js_make_props_and_state_transform_1 = require("./transforms/react-js-make-props-and-state-transform");
exports.reactJSMakePropsAndStateInterfaceTransformFactoryFactory = react_js_make_props_and_state_transform_1.reactJSMakePropsAndStateInterfaceTransformFactoryFactory;
var react_remove_prop_types_assignment_transform_1 = require("./transforms/react-remove-prop-types-assignment-transform");
exports.reactRemovePropTypesAssignmentTransformFactoryFactory = react_remove_prop_types_assignment_transform_1.reactRemovePropTypesAssignmentTransformFactoryFactory;
var react_move_prop_types_to_class_transform_1 = require("./transforms/react-move-prop-types-to-class-transform");
exports.reactMovePropTypesToClassTransformFactoryFactory = react_move_prop_types_to_class_transform_1.reactMovePropTypesToClassTransformFactoryFactory;
var collapse_intersection_interfaces_transform_1 = require("./transforms/collapse-intersection-interfaces-transform");
exports.collapseIntersectionInterfacesTransformFactoryFactory = collapse_intersection_interfaces_transform_1.collapseIntersectionInterfacesTransformFactoryFactory;
var react_remove_static_prop_types_member_transform_1 = require("./transforms/react-remove-static-prop-types-member-transform");
exports.reactRemoveStaticPropTypesMemberTransformFactoryFactory = react_remove_static_prop_types_member_transform_1.reactRemoveStaticPropTypesMemberTransformFactoryFactory;
exports.allTransforms = [
    react_move_prop_types_to_class_transform_1.reactMovePropTypesToClassTransformFactoryFactory,
    react_js_make_props_and_state_transform_1.reactJSMakePropsAndStateInterfaceTransformFactoryFactory,
    collapse_intersection_interfaces_transform_1.collapseIntersectionInterfacesTransformFactoryFactory,
    react_remove_prop_types_assignment_transform_1.reactRemovePropTypesAssignmentTransformFactoryFactory,
    react_remove_static_prop_types_member_transform_1.reactRemoveStaticPropTypesMemberTransformFactoryFactory,
];
/**
 * Run React JavaScript to TypeScript transform for file at `filePath`
 * @param filePath
 */
function run(filePath) {
    return compiler_1.compile(filePath, exports.allTransforms);
}
exports.run = run;
//# sourceMappingURL=index.js.map