import * as ts from 'typescript';
export declare type Factory = ts.TransformerFactory<ts.SourceFile>;
/**
 * Get transform for transforming React code originally written in JS which does not have
 * props and state generic types
 * This transform will remove React component static "propTypes" member during transform
 */
export declare function reactJSMakePropsAndStateInterfaceTransformFactoryFactory(typeChecker: ts.TypeChecker): Factory;
