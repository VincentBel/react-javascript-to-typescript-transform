import * as ts from 'typescript';
export declare type Factory = ts.TransformerFactory<ts.SourceFile>;
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
export declare function reactRemoveStaticPropTypesMemberTransformFactoryFactory(typeChecker: ts.TypeChecker): Factory;
