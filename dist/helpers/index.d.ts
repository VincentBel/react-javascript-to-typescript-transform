import * as ts from 'typescript';
import { find, some } from 'lodash';
export * from './isKind';
/**
 * If a class declaration a react class?
 * @param classDeclaration
 * @param typeChecker
 */
export declare function isReactComponent(classDeclaration: ts.ClassDeclaration, typeChecker: ts.TypeChecker): boolean;
/**
 * Determine if a ts.HeritageClause is React HeritageClause
 *
 * @example `extends React.Component<{}, {}>` is a React HeritageClause
 *
 * @todo: this is lazy. Use the typeChecker instead
 * @param clause
 */
export declare function isReactHeritageClause(clause: ts.HeritageClause): boolean;
/**
 * Return true if a statement is a React propType assignment statement
 * @example
 * SomeComponent.propTypes = { foo: React.PropTypes.string };
 * @param statement
 */
export declare function isReactPropTypeAssignmentStatement(statement: ts.Node): boolean;
/**
 * Does class member have a "static" member?
 * @param classMember
 */
export declare function hasStaticModifier(classMember: ts.ClassElement): boolean;
/**
 * Is class member a React "propTypes" member?
 * @param classMember
 */
export declare function isPropTypesMember(classMember: ts.ClassElement, sourceFile: ts.SourceFile): boolean;
export declare function convertReactStatelessFunctionToArrowFunction(statelessFunc: ts.FunctionDeclaration | ts.VariableStatement): ts.VariableStatement;
export { find, some as has };
/**
 * Insert an item in middle of an array after a specific item
 * @param collection
 * @param afterItem
 * @param newItem
 */
export declare function insertAfter<T>(collection: ArrayLike<T>, afterItem: T, newItem: T): T[];
/**
 * Insert an item in middle of an array before a specific item
 * @param collection
 * @param beforeItem
 * @param newItem
 */
export declare function insertBefore<T>(collection: ArrayLike<T>, beforeItem: T, newItems: T | T[]): T[];
/**
 * Replace an item in a collection with another item
 * @param collection
 * @param item
 * @param newItem
 */
export declare function replaceItem<T>(collection: ArrayLike<T>, item: T, newItem: T): T[];
/**
 * Remove an item from a collection
 * @param collection
 * @param item
 * @param newItem
 */
export declare function removeItem<T>(collection: ArrayLike<T>, item: T): T[];
