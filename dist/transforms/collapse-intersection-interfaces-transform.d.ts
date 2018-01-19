import * as ts from 'typescript';
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
export declare function collapseIntersectionInterfacesTransformFactoryFactory(typeChecker: ts.TypeChecker): ts.TransformerFactory<ts.SourceFile>;
