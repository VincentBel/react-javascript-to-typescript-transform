import * as ts from 'typescript';
import { compile } from './compiler';
import { reactJSMakePropsAndStateInterfaceTransformFactoryFactory } from './transforms/react-js-make-props-and-state-transform';
import { reactRemovePropTypesAssignmentTransformFactoryFactory } from './transforms/react-remove-prop-types-assignment-transform';
import { reactMovePropTypesToClassTransformFactoryFactory } from './transforms/react-move-prop-types-to-class-transform';
import { collapseIntersectionInterfacesTransformFactoryFactory } from './transforms/collapse-intersection-interfaces-transform';
import { reactRemoveStaticPropTypesMemberTransformFactoryFactory } from './transforms/react-remove-static-prop-types-member-transform';
export { reactMovePropTypesToClassTransformFactoryFactory, reactJSMakePropsAndStateInterfaceTransformFactoryFactory, collapseIntersectionInterfacesTransformFactoryFactory, reactRemovePropTypesAssignmentTransformFactoryFactory, reactRemoveStaticPropTypesMemberTransformFactoryFactory, compile };
export declare const allTransforms: ((typeChecker: ts.TypeChecker) => ts.TransformerFactory<ts.SourceFile>)[];
export declare type TransformFactoryFactory = (typeChecker: ts.TypeChecker) => ts.TransformerFactory<ts.SourceFile>;
/**
 * Run React JavaScript to TypeScript transform for file at `filePath`
 * @param filePath
 */
export declare function run(filePath: string): string;
