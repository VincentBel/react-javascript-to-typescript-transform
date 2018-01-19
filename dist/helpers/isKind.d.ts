import * as ts from 'typescript';
/**
 * Return true if node is `EndOfFileToken`
 * @param node A TypeScript node
 */
export declare function isEndOfFileToken(node: ts.Node): node is ts.EndOfFileToken;
/**
 * Return true if node is `NumericLiteral`
 * @param node A TypeScript node
 */
export declare function isNumericLiteral(node: ts.Node): node is ts.NumericLiteral;
/**
 * Return true if node is `StringLiteral`
 * @param node A TypeScript node
 */
export declare function isStringLiteral(node: ts.Node): node is ts.StringLiteral;
/**
 * Return true if node is `JsxText`
 * @param node A TypeScript node
 */
export declare function isJsxText(node: ts.Node): node is ts.JsxText;
/**
 * Return true if node is `RegularExpressionLiteral`
 * @param node A TypeScript node
 */
export declare function isRegularExpressionLiteral(node: ts.Node): node is ts.RegularExpressionLiteral;
/**
 * Return true if node is `NoSubstitutionTemplateLiteral`
 * @param node A TypeScript node
 */
export declare function isNoSubstitutionTemplateLiteral(node: ts.Node): node is ts.NoSubstitutionTemplateLiteral;
/**
 * Return true if node is `TemplateHead`
 * @param node A TypeScript node
 */
export declare function isTemplateHead(node: ts.Node): node is ts.TemplateHead;
/**
 * Return true if node is `TemplateMiddle`
 * @param node A TypeScript node
 */
export declare function isTemplateMiddle(node: ts.Node): node is ts.TemplateMiddle;
/**
 * Return true if node is `TemplateTail`
 * @param node A TypeScript node
 */
export declare function isTemplateTail(node: ts.Node): node is ts.TemplateTail;
/**
 * Return true if node is `DotDotDotToken`
 * @param node A TypeScript node
 */
export declare function isDotDotDotToken(node: ts.Node): node is ts.DotDotDotToken;
/**
 * Return true if node is `EqualsGreaterThanToken`
 * @param node A TypeScript node
 */
export declare function isEqualsGreaterThanToken(node: ts.Node): node is ts.EqualsGreaterThanToken;
/**
 * Return true if node is `AsteriskToken`
 * @param node A TypeScript node
 */
export declare function isAsteriskToken(node: ts.Node): node is ts.AsteriskToken;
/**
 * Return true if node is `QuestionToken`
 * @param node A TypeScript node
 */
export declare function isQuestionToken(node: ts.Node): node is ts.QuestionToken;
/**
 * Return true if node is `ColonToken`
 * @param node A TypeScript node
 */
export declare function isColonToken(node: ts.Node): node is ts.ColonToken;
/**
 * Return true if node is `AtToken`
 * @param node A TypeScript node
 */
export declare function isAtToken(node: ts.Node): node is ts.AtToken;
/**
 * Return true if node is `EqualsToken`
 * @param node A TypeScript node
 */
export declare function isEqualsToken(node: ts.Node): node is ts.EqualsToken;
/**
 * Return true if node is `Identifier`
 * @param node A TypeScript node
 */
export declare function isIdentifier(node: ts.Node): node is ts.Identifier;
/**
 * Return true if node is `QualifiedName`
 * @param node A TypeScript node
 */
export declare function isQualifiedName(node: ts.Node): node is ts.QualifiedName;
/**
 * Return true if node is `ComputedPropertyName`
 * @param node A TypeScript node
 */
export declare function isComputedPropertyName(node: ts.Node): node is ts.ComputedPropertyName;
/**
 * Return true if node is `Decorator`
 * @param node A TypeScript node
 */
export declare function isDecorator(node: ts.Node): node is ts.Decorator;
/**
 * Return true if node is `PropertySignature`
 * @param node A TypeScript node
 */
export declare function isPropertySignature(node: ts.Node): node is ts.PropertySignature;
/**
 * Return true if node is `PropertyDeclaration`
 * @param node A TypeScript node
 */
export declare function isPropertyDeclaration(node: ts.Node): node is ts.PropertyDeclaration;
/**
 * Return true if node is `MethodSignature`
 * @param node A TypeScript node
 */
export declare function isMethodSignature(node: ts.Node): node is ts.MethodSignature;
/**
 * Return true if node is `MethodDeclaration`
 * @param node A TypeScript node
 */
export declare function isMethodDeclaration(node: ts.Node): node is ts.MethodDeclaration;
/**
 * Return true if node is `ObjectBindingPattern`
 * @param node A TypeScript node
 */
export declare function isObjectBindingPattern(node: ts.Node): node is ts.ObjectBindingPattern;
/**
 * Return true if node is `ArrayBindingPattern`
 * @param node A TypeScript node
 */
export declare function isArrayBindingPattern(node: ts.Node): node is ts.ArrayBindingPattern;
/**
 * Return true if node is `BindingElement`
 * @param node A TypeScript node
 */
export declare function isBindingElement(node: ts.Node): node is ts.BindingElement;
/**
 * Return true if node is `ArrayLiteralExpression`
 * @param node A TypeScript node
 */
export declare function isArrayLiteralExpression(node: ts.Node): node is ts.ArrayLiteralExpression;
/**
 * Return true if node is `ObjectLiteralExpression`
 * @param node A TypeScript node
 */
export declare function isObjectLiteralExpression(node: ts.Node): node is ts.ObjectLiteralExpression;
/**
 * Return true if node is `PropertyAccessExpression`
 * @param node A TypeScript node
 */
export declare function isPropertyAccessExpression(node: ts.Node): node is ts.PropertyAccessExpression;
/**
 * Return true if node is `ElementAccessExpression`
 * @param node A TypeScript node
 */
export declare function isElementAccessExpression(node: ts.Node): node is ts.ElementAccessExpression;
/**
 * Return true if node is `CallExpression`
 * @param node A TypeScript node
 */
export declare function isCallExpression(node: ts.Node): node is ts.CallExpression;
/**
 * Return true if node is `NewExpression`
 * @param node A TypeScript node
 */
export declare function isNewExpression(node: ts.Node): node is ts.NewExpression;
/**
 * Return true if node is `TaggedTemplateExpression`
 * @param node A TypeScript node
 */
export declare function isTaggedTemplateExpression(node: ts.Node): node is ts.TaggedTemplateExpression;
/**
 * Return true if node is `ParenthesizedExpression`
 * @param node A TypeScript node
 */
export declare function isParenthesizedExpression(node: ts.Node): node is ts.ParenthesizedExpression;
/**
 * Return true if node is `FunctionExpression`
 * @param node A TypeScript node
 */
export declare function isFunctionExpression(node: ts.Node): node is ts.FunctionExpression;
/**
 * Return true if node is `ArrowFunction`
 * @param node A TypeScript node
 */
export declare function isArrowFunction(node: ts.Node): node is ts.ArrowFunction;
/**
 * Return true if node is `DeleteExpression`
 * @param node A TypeScript node
 */
export declare function isDeleteExpression(node: ts.Node): node is ts.DeleteExpression;
/**
 * Return true if node is `TypeOfExpression`
 * @param node A TypeScript node
 */
export declare function isTypeOfExpression(node: ts.Node): node is ts.TypeOfExpression;
/**
 * Return true if node is `VoidExpression`
 * @param node A TypeScript node
 */
export declare function isVoidExpression(node: ts.Node): node is ts.VoidExpression;
/**
 * Return true if node is `AwaitExpression`
 * @param node A TypeScript node
 */
export declare function isAwaitExpression(node: ts.Node): node is ts.AwaitExpression;
/**
 * Return true if node is `PrefixUnaryExpression`
 * @param node A TypeScript node
 */
export declare function isPrefixUnaryExpression(node: ts.Node): node is ts.PrefixUnaryExpression;
/**
 * Return true if node is `PostfixUnaryExpression`
 * @param node A TypeScript node
 */
export declare function isPostfixUnaryExpression(node: ts.Node): node is ts.PostfixUnaryExpression;
/**
 * Return true if node is `BinaryExpression`
 * @param node A TypeScript node
 */
export declare function isBinaryExpression(node: ts.Node): node is ts.BinaryExpression;
/**
 * Return true if node is `ConditionalExpression`
 * @param node A TypeScript node
 */
export declare function isConditionalExpression(node: ts.Node): node is ts.ConditionalExpression;
/**
 * Return true if node is `TemplateExpression`
 * @param node A TypeScript node
 */
export declare function isTemplateExpression(node: ts.Node): node is ts.TemplateExpression;
/**
 * Return true if node is `YieldExpression`
 * @param node A TypeScript node
 */
export declare function isYieldExpression(node: ts.Node): node is ts.YieldExpression;
/**
 * Return true if node is `SpreadElement`
 * @param node A TypeScript node
 */
export declare function isSpreadElement(node: ts.Node): node is ts.SpreadElement;
/**
 * Return true if node is `ClassExpression`
 * @param node A TypeScript node
 */
export declare function isClassExpression(node: ts.Node): node is ts.ClassExpression;
/**
 * Return true if node is `OmittedExpression`
 * @param node A TypeScript node
 */
export declare function isOmittedExpression(node: ts.Node): node is ts.OmittedExpression;
/**
 * Return true if node is `ExpressionWithTypeArguments`
 * @param node A TypeScript node
 */
export declare function isExpressionWithTypeArguments(node: ts.Node): node is ts.ExpressionWithTypeArguments;
/**
 * Return true if node is `AsExpression`
 * @param node A TypeScript node
 */
export declare function isAsExpression(node: ts.Node): node is ts.AsExpression;
/**
 * Return true if node is `NonNullExpression`
 * @param node A TypeScript node
 */
export declare function isNonNullExpression(node: ts.Node): node is ts.NonNullExpression;
/**
 * Return true if node is `MetaProperty`
 * @param node A TypeScript node
 */
export declare function isMetaProperty(node: ts.Node): node is ts.MetaProperty;
/**
 * Return true if node is `TemplateSpan`
 * @param node A TypeScript node
 */
export declare function isTemplateSpan(node: ts.Node): node is ts.TemplateSpan;
/**
 * Return true if node is `SemicolonClassElement`
 * @param node A TypeScript node
 */
export declare function isSemicolonClassElement(node: ts.Node): node is ts.SemicolonClassElement;
/**
 * Return true if node is `Block`
 * @param node A TypeScript node
 */
export declare function isBlock(node: ts.Node): node is ts.Block;
/**
 * Return true if node is `VariableStatement`
 * @param node A TypeScript node
 */
export declare function isVariableStatement(node: ts.Node): node is ts.VariableStatement;
/**
 * Return true if node is `EmptyStatement`
 * @param node A TypeScript node
 */
export declare function isEmptyStatement(node: ts.Node): node is ts.EmptyStatement;
/**
 * Return true if node is `ExpressionStatement`
 * @param node A TypeScript node
 */
export declare function isExpressionStatement(node: ts.Node): node is ts.ExpressionStatement;
/**
 * Return true if node is `IfStatement`
 * @param node A TypeScript node
 */
export declare function isIfStatement(node: ts.Node): node is ts.IfStatement;
/**
 * Return true if node is `DoStatement`
 * @param node A TypeScript node
 */
export declare function isDoStatement(node: ts.Node): node is ts.DoStatement;
/**
 * Return true if node is `WhileStatement`
 * @param node A TypeScript node
 */
export declare function isWhileStatement(node: ts.Node): node is ts.WhileStatement;
/**
 * Return true if node is `ForStatement`
 * @param node A TypeScript node
 */
export declare function isForStatement(node: ts.Node): node is ts.ForStatement;
/**
 * Return true if node is `ForInStatement`
 * @param node A TypeScript node
 */
export declare function isForInStatement(node: ts.Node): node is ts.ForInStatement;
/**
 * Return true if node is `ForOfStatement`
 * @param node A TypeScript node
 */
export declare function isForOfStatement(node: ts.Node): node is ts.ForOfStatement;
/**
 * Return true if node is `ContinueStatement`
 * @param node A TypeScript node
 */
export declare function isContinueStatement(node: ts.Node): node is ts.ContinueStatement;
/**
 * Return true if node is `BreakStatement`
 * @param node A TypeScript node
 */
export declare function isBreakStatement(node: ts.Node): node is ts.BreakStatement;
/**
 * Return true if node is `ReturnStatement`
 * @param node A TypeScript node
 */
export declare function isReturnStatement(node: ts.Node): node is ts.ReturnStatement;
/**
 * Return true if node is `WithStatement`
 * @param node A TypeScript node
 */
export declare function isWithStatement(node: ts.Node): node is ts.WithStatement;
/**
 * Return true if node is `SwitchStatement`
 * @param node A TypeScript node
 */
export declare function isSwitchStatement(node: ts.Node): node is ts.SwitchStatement;
/**
 * Return true if node is `LabeledStatement`
 * @param node A TypeScript node
 */
export declare function isLabeledStatement(node: ts.Node): node is ts.LabeledStatement;
/**
 * Return true if node is `ThrowStatement`
 * @param node A TypeScript node
 */
export declare function isThrowStatement(node: ts.Node): node is ts.ThrowStatement;
/**
 * Return true if node is `TryStatement`
 * @param node A TypeScript node
 */
export declare function isTryStatement(node: ts.Node): node is ts.TryStatement;
/**
 * Return true if node is `DebuggerStatement`
 * @param node A TypeScript node
 */
export declare function isDebuggerStatement(node: ts.Node): node is ts.DebuggerStatement;
/**
 * Return true if node is `VariableDeclaration`
 * @param node A TypeScript node
 */
export declare function isVariableDeclaration(node: ts.Node): node is ts.VariableDeclaration;
/**
 * Return true if node is `VariableDeclarationList`
 * @param node A TypeScript node
 */
export declare function isVariableDeclarationList(node: ts.Node): node is ts.VariableDeclarationList;
/**
 * Return true if node is `FunctionDeclaration`
 * @param node A TypeScript node
 */
export declare function isFunctionDeclaration(node: ts.Node): node is ts.FunctionDeclaration;
/**
 * Return true if node is `ClassDeclaration`
 * @param node A TypeScript node
 */
export declare function isClassDeclaration(node: ts.Node): node is ts.ClassDeclaration;
/**
 * Return true if node is `InterfaceDeclaration`
 * @param node A TypeScript node
 */
export declare function isInterfaceDeclaration(node: ts.Node): node is ts.InterfaceDeclaration;
/**
 * Return true if node is `TypeAliasDeclaration`
 * @param node A TypeScript node
 */
export declare function isTypeAliasDeclaration(node: ts.Node): node is ts.TypeAliasDeclaration;
/**
 * Return true if node is `EnumDeclaration`
 * @param node A TypeScript node
 */
export declare function isEnumDeclaration(node: ts.Node): node is ts.EnumDeclaration;
/**
 * Return true if node is `ModuleDeclaration`
 * @param node A TypeScript node
 */
export declare function isModuleDeclaration(node: ts.Node): node is ts.ModuleDeclaration;
/**
 * Return true if node is `ModuleBlock`
 * @param node A TypeScript node
 */
export declare function isModuleBlock(node: ts.Node): node is ts.ModuleBlock;
/**
 * Return true if node is `CaseBlock`
 * @param node A TypeScript node
 */
export declare function isCaseBlock(node: ts.Node): node is ts.CaseBlock;
/**
 * Return true if node is `NamespaceExportDeclaration`
 * @param node A TypeScript node
 */
export declare function isNamespaceExportDeclaration(node: ts.Node): node is ts.NamespaceExportDeclaration;
/**
 * Return true if node is `ImportEqualsDeclaration`
 * @param node A TypeScript node
 */
export declare function isImportEqualsDeclaration(node: ts.Node): node is ts.ImportEqualsDeclaration;
/**
 * Return true if node is `ImportDeclaration`
 * @param node A TypeScript node
 */
export declare function isImportDeclaration(node: ts.Node): node is ts.ImportDeclaration;
/**
 * Return true if node is `ImportClause`
 * @param node A TypeScript node
 */
export declare function isImportClause(node: ts.Node): node is ts.ImportClause;
/**
 * Return true if node is `NamespaceImport`
 * @param node A TypeScript node
 */
export declare function isNamespaceImport(node: ts.Node): node is ts.NamespaceImport;
/**
 * Return true if node is `NamedImports`
 * @param node A TypeScript node
 */
export declare function isNamedImports(node: ts.Node): node is ts.NamedImports;
/**
 * Return true if node is `ImportSpecifier`
 * @param node A TypeScript node
 */
export declare function isImportSpecifier(node: ts.Node): node is ts.ImportSpecifier;
/**
 * Return true if node is `ExportAssignment`
 * @param node A TypeScript node
 */
export declare function isExportAssignment(node: ts.Node): node is ts.ExportAssignment;
/**
 * Return true if node is `ExportDeclaration`
 * @param node A TypeScript node
 */
export declare function isExportDeclaration(node: ts.Node): node is ts.ExportDeclaration;
/**
 * Return true if node is `NamedExports`
 * @param node A TypeScript node
 */
export declare function isNamedExports(node: ts.Node): node is ts.NamedExports;
/**
 * Return true if node is `ExportSpecifier`
 * @param node A TypeScript node
 */
export declare function isExportSpecifier(node: ts.Node): node is ts.ExportSpecifier;
/**
 * Return true if node is `MissingDeclaration`
 * @param node A TypeScript node
 */
export declare function isMissingDeclaration(node: ts.Node): node is ts.MissingDeclaration;
/**
 * Return true if node is `ExternalModuleReference`
 * @param node A TypeScript node
 */
export declare function isExternalModuleReference(node: ts.Node): node is ts.ExternalModuleReference;
/**
 * Return true if node is `JsxElement`
 * @param node A TypeScript node
 */
export declare function isJsxElement(node: ts.Node): node is ts.JsxElement;
/**
 * Return true if node is `JsxSelfClosingElement`
 * @param node A TypeScript node
 */
export declare function isJsxSelfClosingElement(node: ts.Node): node is ts.JsxSelfClosingElement;
/**
 * Return true if node is `JsxOpeningElement`
 * @param node A TypeScript node
 */
export declare function isJsxOpeningElement(node: ts.Node): node is ts.JsxOpeningElement;
/**
 * Return true if node is `JsxClosingElement`
 * @param node A TypeScript node
 */
export declare function isJsxClosingElement(node: ts.Node): node is ts.JsxClosingElement;
/**
 * Return true if node is `JsxAttribute`
 * @param node A TypeScript node
 */
export declare function isJsxAttribute(node: ts.Node): node is ts.JsxAttribute;
/**
 * Return true if node is `JsxAttributes`
 * @param node A TypeScript node
 */
export declare function isJsxAttributes(node: ts.Node): node is ts.JsxAttributes;
/**
 * Return true if node is `JsxSpreadAttribute`
 * @param node A TypeScript node
 */
export declare function isJsxSpreadAttribute(node: ts.Node): node is ts.JsxSpreadAttribute;
/**
 * Return true if node is `JsxExpression`
 * @param node A TypeScript node
 */
export declare function isJsxExpression(node: ts.Node): node is ts.JsxExpression;
/**
 * Return true if node is `CaseClause`
 * @param node A TypeScript node
 */
export declare function isCaseClause(node: ts.Node): node is ts.CaseClause;
/**
 * Return true if node is `DefaultClause`
 * @param node A TypeScript node
 */
export declare function isDefaultClause(node: ts.Node): node is ts.DefaultClause;
/**
 * Return true if node is `HeritageClause`
 * @param node A TypeScript node
 */
export declare function isHeritageClause(node: ts.Node): node is ts.HeritageClause;
/**
 * Return true if node is `CatchClause`
 * @param node A TypeScript node
 */
export declare function isCatchClause(node: ts.Node): node is ts.CatchClause;
/**
 * Return true if node is `PropertyAssignment`
 * @param node A TypeScript node
 */
export declare function isPropertyAssignment(node: ts.Node): node is ts.PropertyAssignment;
/**
 * Return true if node is `ShorthandPropertyAssignment`
 * @param node A TypeScript node
 */
export declare function isShorthandPropertyAssignment(node: ts.Node): node is ts.ShorthandPropertyAssignment;
/**
 * Return true if node is `SpreadAssignment`
 * @param node A TypeScript node
 */
export declare function isSpreadAssignment(node: ts.Node): node is ts.SpreadAssignment;
/**
 * Return true if node is `EnumMember`
 * @param node A TypeScript node
 */
export declare function isEnumMember(node: ts.Node): node is ts.EnumMember;
/**
 * Return true if node is `SourceFile`
 * @param node A TypeScript node
 */
export declare function isSourceFile(node: ts.Node): node is ts.SourceFile;
/**
 * Return true if node is `Bundle`
 * @param node A TypeScript node
 */
export declare function isBundle(node: ts.Node): node is ts.Bundle;
/**
 * Return true if node is `JSDocTypeExpression`
 * @param node A TypeScript node
 */
export declare function isJSDocTypeExpression(node: ts.Node): node is ts.JSDocTypeExpression;
/**
 * Return true if node is `JSDocAllType`
 * @param node A TypeScript node
 */
export declare function isJSDocAllType(node: ts.Node): node is ts.JSDocAllType;
/**
 * Return true if node is `JSDocUnknownType`
 * @param node A TypeScript node
 */
export declare function isJSDocUnknownType(node: ts.Node): node is ts.JSDocUnknownType;
/**
 * Return true if node is `JSDocArrayType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocUnionType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocTupleType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocNullableType`
 * @param node A TypeScript node
 */
export declare function isJSDocNullableType(node: ts.Node): node is ts.JSDocNullableType;
/**
 * Return true if node is `JSDocNonNullableType`
 * @param node A TypeScript node
 */
export declare function isJSDocNonNullableType(node: ts.Node): node is ts.JSDocNonNullableType;
/**
 * Return true if node is `JSDocRecordType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocRecordMember`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocTypeReference`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocOptionalType`
 * @param node A TypeScript node
 */
export declare function isJSDocOptionalType(node: ts.Node): node is ts.JSDocOptionalType;
/**
 * Return true if node is `JSDocFunctionType`
 * @param node A TypeScript node
 */
export declare function isJSDocFunctionType(node: ts.Node): node is ts.JSDocFunctionType;
/**
 * Return true if node is `JSDocVariadicType`
 * @param node A TypeScript node
 */
export declare function isJSDocVariadicType(node: ts.Node): node is ts.JSDocVariadicType;
/**
 * Return true if node is `JSDocConstructorType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocThisType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `JSDocTag`
 * @param node A TypeScript node
 */
export declare function isJSDocTag(node: ts.Node): node is ts.JSDocTag;
/**
 * Return true if node is `JSDocAugmentsTag`
 * @param node A TypeScript node
 */
export declare function isJSDocAugmentsTag(node: ts.Node): node is ts.JSDocAugmentsTag;
/**
 * Return true if node is `JSDocParameterTag`
 * @param node A TypeScript node
 */
export declare function isJSDocParameterTag(node: ts.Node): node is ts.JSDocParameterTag;
/**
 * Return true if node is `JSDocReturnTag`
 * @param node A TypeScript node
 */
export declare function isJSDocReturnTag(node: ts.Node): node is ts.JSDocReturnTag;
/**
 * Return true if node is `JSDocTypeTag`
 * @param node A TypeScript node
 */
export declare function isJSDocTypeTag(node: ts.Node): node is ts.JSDocTypeTag;
/**
 * Return true if node is `JSDocTemplateTag`
 * @param node A TypeScript node
 */
export declare function isJSDocTemplateTag(node: ts.Node): node is ts.JSDocTemplateTag;
/**
 * Return true if node is `JSDocTypedefTag`
 * @param node A TypeScript node
 */
export declare function isJSDocTypedefTag(node: ts.Node): node is ts.JSDocTypedefTag;
/**
 * Return true if node is `JSDocPropertyTag`
 * @param node A TypeScript node
 */
export declare function isJSDocPropertyTag(node: ts.Node): node is ts.JSDocPropertyTag;
/**
 * Return true if node is `JSDocTypeLiteral`
 * @param node A TypeScript node
 */
export declare function isJSDocTypeLiteral(node: ts.Node): node is ts.JSDocTypeLiteral;
/**
 * Return true if node is `JSDocLiteralType`
 * @param node A TypeScript node
 */
/**
 * Return true if node is `SyntaxList`
 * @param node A TypeScript node
 */
export declare function isSyntaxList(node: ts.Node): node is ts.SyntaxList;
/**
 * Return true if node is `NotEmittedStatement`
 * @param node A TypeScript node
 */
export declare function isNotEmittedStatement(node: ts.Node): node is ts.NotEmittedStatement;
/**
 * Return true if node is `PartiallyEmittedExpression`
 * @param node A TypeScript node
 */
export declare function isPartiallyEmittedExpression(node: ts.Node): node is ts.PartiallyEmittedExpression;
/**
 * Return true if node is `IntersectionTypeNode`
 * @param node A TypeScript node
 */
export declare function isIntersectionTypeNode(node: ts.TypeNode): node is ts.IntersectionTypeNode;
/**
 * Return true if node is `LiteralTypeNode`
 * @param node A TypeScript node
 */
export declare function isTypeLiteralNode(node: ts.TypeNode): node is ts.LiteralTypeNode;
/**
 * Return true if node is `GetAccessorDeclaration`
 * @param node A TypeScript node
 */
export declare function isGetAccessorDeclaration(node: ts.Node): node is ts.GetAccessorDeclaration;