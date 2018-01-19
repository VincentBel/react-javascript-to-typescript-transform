import * as ts from 'typescript';
export declare type Factory = ts.TransformerFactory<ts.SourceFile>;
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
export declare function reactMovePropTypesToClassTransformFactoryFactory(typeChecker: ts.TypeChecker): Factory;
