"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
/**
 * Return true if node is `EndOfFileToken`
 * @param node A TypeScript node
 */
function isEndOfFileToken(node) {
    return node.kind === ts.SyntaxKind.EndOfFileToken;
}
exports.isEndOfFileToken = isEndOfFileToken;
/**
 * Return true if node is `NumericLiteral`
 * @param node A TypeScript node
 */
function isNumericLiteral(node) {
    return node.kind === ts.SyntaxKind.NumericLiteral;
}
exports.isNumericLiteral = isNumericLiteral;
/**
 * Return true if node is `StringLiteral`
 * @param node A TypeScript node
 */
function isStringLiteral(node) {
    return node.kind === ts.SyntaxKind.StringLiteral;
}
exports.isStringLiteral = isStringLiteral;
/**
 * Return true if node is `JsxText`
 * @param node A TypeScript node
 */
function isJsxText(node) {
    return node.kind === ts.SyntaxKind.JsxText;
}
exports.isJsxText = isJsxText;
/**
 * Return true if node is `RegularExpressionLiteral`
 * @param node A TypeScript node
 */
function isRegularExpressionLiteral(node) {
    return node.kind === ts.SyntaxKind.RegularExpressionLiteral;
}
exports.isRegularExpressionLiteral = isRegularExpressionLiteral;
/**
 * Return true if node is `NoSubstitutionTemplateLiteral`
 * @param node A TypeScript node
 */
function isNoSubstitutionTemplateLiteral(node) {
    return node.kind === ts.SyntaxKind.NoSubstitutionTemplateLiteral;
}
exports.isNoSubstitutionTemplateLiteral = isNoSubstitutionTemplateLiteral;
/**
 * Return true if node is `TemplateHead`
 * @param node A TypeScript node
 */
function isTemplateHead(node) {
    return node.kind === ts.SyntaxKind.TemplateHead;
}
exports.isTemplateHead = isTemplateHead;
/**
 * Return true if node is `TemplateMiddle`
 * @param node A TypeScript node
 */
function isTemplateMiddle(node) {
    return node.kind === ts.SyntaxKind.TemplateMiddle;
}
exports.isTemplateMiddle = isTemplateMiddle;
/**
 * Return true if node is `TemplateTail`
 * @param node A TypeScript node
 */
function isTemplateTail(node) {
    return node.kind === ts.SyntaxKind.TemplateTail;
}
exports.isTemplateTail = isTemplateTail;
/**
 * Return true if node is `DotDotDotToken`
 * @param node A TypeScript node
 */
function isDotDotDotToken(node) {
    return node.kind === ts.SyntaxKind.DotDotDotToken;
}
exports.isDotDotDotToken = isDotDotDotToken;
/**
 * Return true if node is `EqualsGreaterThanToken`
 * @param node A TypeScript node
 */
function isEqualsGreaterThanToken(node) {
    return node.kind === ts.SyntaxKind.EqualsGreaterThanToken;
}
exports.isEqualsGreaterThanToken = isEqualsGreaterThanToken;
/**
 * Return true if node is `AsteriskToken`
 * @param node A TypeScript node
 */
function isAsteriskToken(node) {
    return node.kind === ts.SyntaxKind.AsteriskToken;
}
exports.isAsteriskToken = isAsteriskToken;
/**
 * Return true if node is `QuestionToken`
 * @param node A TypeScript node
 */
function isQuestionToken(node) {
    return node.kind === ts.SyntaxKind.QuestionToken;
}
exports.isQuestionToken = isQuestionToken;
/**
 * Return true if node is `ColonToken`
 * @param node A TypeScript node
 */
function isColonToken(node) {
    return node.kind === ts.SyntaxKind.ColonToken;
}
exports.isColonToken = isColonToken;
/**
 * Return true if node is `AtToken`
 * @param node A TypeScript node
 */
function isAtToken(node) {
    return node.kind === ts.SyntaxKind.AtToken;
}
exports.isAtToken = isAtToken;
/**
 * Return true if node is `EqualsToken`
 * @param node A TypeScript node
 */
function isEqualsToken(node) {
    return node.kind === ts.SyntaxKind.EqualsToken;
}
exports.isEqualsToken = isEqualsToken;
/**
 * Return true if node is `Identifier`
 * @param node A TypeScript node
 */
function isIdentifier(node) {
    return node.kind === ts.SyntaxKind.Identifier;
}
exports.isIdentifier = isIdentifier;
/**
 * Return true if node is `QualifiedName`
 * @param node A TypeScript node
 */
function isQualifiedName(node) {
    return node.kind === ts.SyntaxKind.QualifiedName;
}
exports.isQualifiedName = isQualifiedName;
/**
 * Return true if node is `ComputedPropertyName`
 * @param node A TypeScript node
 */
function isComputedPropertyName(node) {
    return node.kind === ts.SyntaxKind.ComputedPropertyName;
}
exports.isComputedPropertyName = isComputedPropertyName;
/**
 * Return true if node is `Decorator`
 * @param node A TypeScript node
 */
function isDecorator(node) {
    return node.kind === ts.SyntaxKind.Decorator;
}
exports.isDecorator = isDecorator;
/**
 * Return true if node is `PropertySignature`
 * @param node A TypeScript node
 */
function isPropertySignature(node) {
    return node.kind === ts.SyntaxKind.PropertySignature;
}
exports.isPropertySignature = isPropertySignature;
/**
 * Return true if node is `PropertyDeclaration`
 * @param node A TypeScript node
 */
function isPropertyDeclaration(node) {
    return node.kind === ts.SyntaxKind.PropertyDeclaration;
}
exports.isPropertyDeclaration = isPropertyDeclaration;
/**
 * Return true if node is `MethodSignature`
 * @param node A TypeScript node
 */
function isMethodSignature(node) {
    return node.kind === ts.SyntaxKind.MethodSignature;
}
exports.isMethodSignature = isMethodSignature;
/**
 * Return true if node is `MethodDeclaration`
 * @param node A TypeScript node
 */
function isMethodDeclaration(node) {
    return node.kind === ts.SyntaxKind.MethodDeclaration;
}
exports.isMethodDeclaration = isMethodDeclaration;
/**
 * Return true if node is `ObjectBindingPattern`
 * @param node A TypeScript node
 */
function isObjectBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ObjectBindingPattern;
}
exports.isObjectBindingPattern = isObjectBindingPattern;
/**
 * Return true if node is `ArrayBindingPattern`
 * @param node A TypeScript node
 */
function isArrayBindingPattern(node) {
    return node.kind === ts.SyntaxKind.ArrayBindingPattern;
}
exports.isArrayBindingPattern = isArrayBindingPattern;
/**
 * Return true if node is `BindingElement`
 * @param node A TypeScript node
 */
function isBindingElement(node) {
    return node.kind === ts.SyntaxKind.BindingElement;
}
exports.isBindingElement = isBindingElement;
/**
 * Return true if node is `ArrayLiteralExpression`
 * @param node A TypeScript node
 */
function isArrayLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ArrayLiteralExpression;
}
exports.isArrayLiteralExpression = isArrayLiteralExpression;
/**
 * Return true if node is `ObjectLiteralExpression`
 * @param node A TypeScript node
 */
function isObjectLiteralExpression(node) {
    return node.kind === ts.SyntaxKind.ObjectLiteralExpression;
}
exports.isObjectLiteralExpression = isObjectLiteralExpression;
/**
 * Return true if node is `PropertyAccessExpression`
 * @param node A TypeScript node
 */
function isPropertyAccessExpression(node) {
    return node.kind === ts.SyntaxKind.PropertyAccessExpression;
}
exports.isPropertyAccessExpression = isPropertyAccessExpression;
/**
 * Return true if node is `ElementAccessExpression`
 * @param node A TypeScript node
 */
function isElementAccessExpression(node) {
    return node.kind === ts.SyntaxKind.ElementAccessExpression;
}
exports.isElementAccessExpression = isElementAccessExpression;
/**
 * Return true if node is `CallExpression`
 * @param node A TypeScript node
 */
function isCallExpression(node) {
    return node.kind === ts.SyntaxKind.CallExpression;
}
exports.isCallExpression = isCallExpression;
/**
 * Return true if node is `NewExpression`
 * @param node A TypeScript node
 */
function isNewExpression(node) {
    return node.kind === ts.SyntaxKind.NewExpression;
}
exports.isNewExpression = isNewExpression;
/**
 * Return true if node is `TaggedTemplateExpression`
 * @param node A TypeScript node
 */
function isTaggedTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TaggedTemplateExpression;
}
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
/**
 * Return true if node is `ParenthesizedExpression`
 * @param node A TypeScript node
 */
function isParenthesizedExpression(node) {
    return node.kind === ts.SyntaxKind.ParenthesizedExpression;
}
exports.isParenthesizedExpression = isParenthesizedExpression;
/**
 * Return true if node is `FunctionExpression`
 * @param node A TypeScript node
 */
function isFunctionExpression(node) {
    return node.kind === ts.SyntaxKind.FunctionExpression;
}
exports.isFunctionExpression = isFunctionExpression;
/**
 * Return true if node is `ArrowFunction`
 * @param node A TypeScript node
 */
function isArrowFunction(node) {
    return node.kind === ts.SyntaxKind.ArrowFunction;
}
exports.isArrowFunction = isArrowFunction;
/**
 * Return true if node is `DeleteExpression`
 * @param node A TypeScript node
 */
function isDeleteExpression(node) {
    return node.kind === ts.SyntaxKind.DeleteExpression;
}
exports.isDeleteExpression = isDeleteExpression;
/**
 * Return true if node is `TypeOfExpression`
 * @param node A TypeScript node
 */
function isTypeOfExpression(node) {
    return node.kind === ts.SyntaxKind.TypeOfExpression;
}
exports.isTypeOfExpression = isTypeOfExpression;
/**
 * Return true if node is `VoidExpression`
 * @param node A TypeScript node
 */
function isVoidExpression(node) {
    return node.kind === ts.SyntaxKind.VoidExpression;
}
exports.isVoidExpression = isVoidExpression;
/**
 * Return true if node is `AwaitExpression`
 * @param node A TypeScript node
 */
function isAwaitExpression(node) {
    return node.kind === ts.SyntaxKind.AwaitExpression;
}
exports.isAwaitExpression = isAwaitExpression;
/**
 * Return true if node is `PrefixUnaryExpression`
 * @param node A TypeScript node
 */
function isPrefixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PrefixUnaryExpression;
}
exports.isPrefixUnaryExpression = isPrefixUnaryExpression;
/**
 * Return true if node is `PostfixUnaryExpression`
 * @param node A TypeScript node
 */
function isPostfixUnaryExpression(node) {
    return node.kind === ts.SyntaxKind.PostfixUnaryExpression;
}
exports.isPostfixUnaryExpression = isPostfixUnaryExpression;
/**
 * Return true if node is `BinaryExpression`
 * @param node A TypeScript node
 */
function isBinaryExpression(node) {
    return node.kind === ts.SyntaxKind.BinaryExpression;
}
exports.isBinaryExpression = isBinaryExpression;
/**
 * Return true if node is `ConditionalExpression`
 * @param node A TypeScript node
 */
function isConditionalExpression(node) {
    return node.kind === ts.SyntaxKind.ConditionalExpression;
}
exports.isConditionalExpression = isConditionalExpression;
/**
 * Return true if node is `TemplateExpression`
 * @param node A TypeScript node
 */
function isTemplateExpression(node) {
    return node.kind === ts.SyntaxKind.TemplateExpression;
}
exports.isTemplateExpression = isTemplateExpression;
/**
 * Return true if node is `YieldExpression`
 * @param node A TypeScript node
 */
function isYieldExpression(node) {
    return node.kind === ts.SyntaxKind.YieldExpression;
}
exports.isYieldExpression = isYieldExpression;
/**
 * Return true if node is `SpreadElement`
 * @param node A TypeScript node
 */
function isSpreadElement(node) {
    return node.kind === ts.SyntaxKind.SpreadElement;
}
exports.isSpreadElement = isSpreadElement;
/**
 * Return true if node is `ClassExpression`
 * @param node A TypeScript node
 */
function isClassExpression(node) {
    return node.kind === ts.SyntaxKind.ClassExpression;
}
exports.isClassExpression = isClassExpression;
/**
 * Return true if node is `OmittedExpression`
 * @param node A TypeScript node
 */
function isOmittedExpression(node) {
    return node.kind === ts.SyntaxKind.OmittedExpression;
}
exports.isOmittedExpression = isOmittedExpression;
/**
 * Return true if node is `ExpressionWithTypeArguments`
 * @param node A TypeScript node
 */
function isExpressionWithTypeArguments(node) {
    return node.kind === ts.SyntaxKind.ExpressionWithTypeArguments;
}
exports.isExpressionWithTypeArguments = isExpressionWithTypeArguments;
/**
 * Return true if node is `AsExpression`
 * @param node A TypeScript node
 */
function isAsExpression(node) {
    return node.kind === ts.SyntaxKind.AsExpression;
}
exports.isAsExpression = isAsExpression;
/**
 * Return true if node is `NonNullExpression`
 * @param node A TypeScript node
 */
function isNonNullExpression(node) {
    return node.kind === ts.SyntaxKind.NonNullExpression;
}
exports.isNonNullExpression = isNonNullExpression;
/**
 * Return true if node is `MetaProperty`
 * @param node A TypeScript node
 */
function isMetaProperty(node) {
    return node.kind === ts.SyntaxKind.MetaProperty;
}
exports.isMetaProperty = isMetaProperty;
/**
 * Return true if node is `TemplateSpan`
 * @param node A TypeScript node
 */
function isTemplateSpan(node) {
    return node.kind === ts.SyntaxKind.TemplateSpan;
}
exports.isTemplateSpan = isTemplateSpan;
/**
 * Return true if node is `SemicolonClassElement`
 * @param node A TypeScript node
 */
function isSemicolonClassElement(node) {
    return node.kind === ts.SyntaxKind.SemicolonClassElement;
}
exports.isSemicolonClassElement = isSemicolonClassElement;
/**
 * Return true if node is `Block`
 * @param node A TypeScript node
 */
function isBlock(node) {
    return node.kind === ts.SyntaxKind.Block;
}
exports.isBlock = isBlock;
/**
 * Return true if node is `VariableStatement`
 * @param node A TypeScript node
 */
function isVariableStatement(node) {
    return node.kind === ts.SyntaxKind.VariableStatement;
}
exports.isVariableStatement = isVariableStatement;
/**
 * Return true if node is `EmptyStatement`
 * @param node A TypeScript node
 */
function isEmptyStatement(node) {
    return node.kind === ts.SyntaxKind.EmptyStatement;
}
exports.isEmptyStatement = isEmptyStatement;
/**
 * Return true if node is `ExpressionStatement`
 * @param node A TypeScript node
 */
function isExpressionStatement(node) {
    return node.kind === ts.SyntaxKind.ExpressionStatement;
}
exports.isExpressionStatement = isExpressionStatement;
/**
 * Return true if node is `IfStatement`
 * @param node A TypeScript node
 */
function isIfStatement(node) {
    return node.kind === ts.SyntaxKind.IfStatement;
}
exports.isIfStatement = isIfStatement;
/**
 * Return true if node is `DoStatement`
 * @param node A TypeScript node
 */
function isDoStatement(node) {
    return node.kind === ts.SyntaxKind.DoStatement;
}
exports.isDoStatement = isDoStatement;
/**
 * Return true if node is `WhileStatement`
 * @param node A TypeScript node
 */
function isWhileStatement(node) {
    return node.kind === ts.SyntaxKind.WhileStatement;
}
exports.isWhileStatement = isWhileStatement;
/**
 * Return true if node is `ForStatement`
 * @param node A TypeScript node
 */
function isForStatement(node) {
    return node.kind === ts.SyntaxKind.ForStatement;
}
exports.isForStatement = isForStatement;
/**
 * Return true if node is `ForInStatement`
 * @param node A TypeScript node
 */
function isForInStatement(node) {
    return node.kind === ts.SyntaxKind.ForInStatement;
}
exports.isForInStatement = isForInStatement;
/**
 * Return true if node is `ForOfStatement`
 * @param node A TypeScript node
 */
function isForOfStatement(node) {
    return node.kind === ts.SyntaxKind.ForOfStatement;
}
exports.isForOfStatement = isForOfStatement;
/**
 * Return true if node is `ContinueStatement`
 * @param node A TypeScript node
 */
function isContinueStatement(node) {
    return node.kind === ts.SyntaxKind.ContinueStatement;
}
exports.isContinueStatement = isContinueStatement;
/**
 * Return true if node is `BreakStatement`
 * @param node A TypeScript node
 */
function isBreakStatement(node) {
    return node.kind === ts.SyntaxKind.BreakStatement;
}
exports.isBreakStatement = isBreakStatement;
/**
 * Return true if node is `ReturnStatement`
 * @param node A TypeScript node
 */
function isReturnStatement(node) {
    return node.kind === ts.SyntaxKind.ReturnStatement;
}
exports.isReturnStatement = isReturnStatement;
/**
 * Return true if node is `WithStatement`
 * @param node A TypeScript node
 */
function isWithStatement(node) {
    return node.kind === ts.SyntaxKind.WithStatement;
}
exports.isWithStatement = isWithStatement;
/**
 * Return true if node is `SwitchStatement`
 * @param node A TypeScript node
 */
function isSwitchStatement(node) {
    return node.kind === ts.SyntaxKind.SwitchStatement;
}
exports.isSwitchStatement = isSwitchStatement;
/**
 * Return true if node is `LabeledStatement`
 * @param node A TypeScript node
 */
function isLabeledStatement(node) {
    return node.kind === ts.SyntaxKind.LabeledStatement;
}
exports.isLabeledStatement = isLabeledStatement;
/**
 * Return true if node is `ThrowStatement`
 * @param node A TypeScript node
 */
function isThrowStatement(node) {
    return node.kind === ts.SyntaxKind.ThrowStatement;
}
exports.isThrowStatement = isThrowStatement;
/**
 * Return true if node is `TryStatement`
 * @param node A TypeScript node
 */
function isTryStatement(node) {
    return node.kind === ts.SyntaxKind.TryStatement;
}
exports.isTryStatement = isTryStatement;
/**
 * Return true if node is `DebuggerStatement`
 * @param node A TypeScript node
 */
function isDebuggerStatement(node) {
    return node.kind === ts.SyntaxKind.DebuggerStatement;
}
exports.isDebuggerStatement = isDebuggerStatement;
/**
 * Return true if node is `VariableDeclaration`
 * @param node A TypeScript node
 */
function isVariableDeclaration(node) {
    return node.kind === ts.SyntaxKind.VariableDeclaration;
}
exports.isVariableDeclaration = isVariableDeclaration;
/**
 * Return true if node is `VariableDeclarationList`
 * @param node A TypeScript node
 */
function isVariableDeclarationList(node) {
    return node.kind === ts.SyntaxKind.VariableDeclarationList;
}
exports.isVariableDeclarationList = isVariableDeclarationList;
/**
 * Return true if node is `FunctionDeclaration`
 * @param node A TypeScript node
 */
function isFunctionDeclaration(node) {
    return node.kind === ts.SyntaxKind.FunctionDeclaration;
}
exports.isFunctionDeclaration = isFunctionDeclaration;
/**
 * Return true if node is `ClassDeclaration`
 * @param node A TypeScript node
 */
function isClassDeclaration(node) {
    return node.kind === ts.SyntaxKind.ClassDeclaration;
}
exports.isClassDeclaration = isClassDeclaration;
/**
 * Return true if node is `InterfaceDeclaration`
 * @param node A TypeScript node
 */
function isInterfaceDeclaration(node) {
    return node.kind === ts.SyntaxKind.InterfaceDeclaration;
}
exports.isInterfaceDeclaration = isInterfaceDeclaration;
/**
 * Return true if node is `TypeAliasDeclaration`
 * @param node A TypeScript node
 */
function isTypeAliasDeclaration(node) {
    return node.kind === ts.SyntaxKind.TypeAliasDeclaration;
}
exports.isTypeAliasDeclaration = isTypeAliasDeclaration;
/**
 * Return true if node is `EnumDeclaration`
 * @param node A TypeScript node
 */
function isEnumDeclaration(node) {
    return node.kind === ts.SyntaxKind.EnumDeclaration;
}
exports.isEnumDeclaration = isEnumDeclaration;
/**
 * Return true if node is `ModuleDeclaration`
 * @param node A TypeScript node
 */
function isModuleDeclaration(node) {
    return node.kind === ts.SyntaxKind.ModuleDeclaration;
}
exports.isModuleDeclaration = isModuleDeclaration;
/**
 * Return true if node is `ModuleBlock`
 * @param node A TypeScript node
 */
function isModuleBlock(node) {
    return node.kind === ts.SyntaxKind.ModuleBlock;
}
exports.isModuleBlock = isModuleBlock;
/**
 * Return true if node is `CaseBlock`
 * @param node A TypeScript node
 */
function isCaseBlock(node) {
    return node.kind === ts.SyntaxKind.CaseBlock;
}
exports.isCaseBlock = isCaseBlock;
/**
 * Return true if node is `NamespaceExportDeclaration`
 * @param node A TypeScript node
 */
function isNamespaceExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.NamespaceExportDeclaration;
}
exports.isNamespaceExportDeclaration = isNamespaceExportDeclaration;
/**
 * Return true if node is `ImportEqualsDeclaration`
 * @param node A TypeScript node
 */
function isImportEqualsDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportEqualsDeclaration;
}
exports.isImportEqualsDeclaration = isImportEqualsDeclaration;
/**
 * Return true if node is `ImportDeclaration`
 * @param node A TypeScript node
 */
function isImportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ImportDeclaration;
}
exports.isImportDeclaration = isImportDeclaration;
/**
 * Return true if node is `ImportClause`
 * @param node A TypeScript node
 */
function isImportClause(node) {
    return node.kind === ts.SyntaxKind.ImportClause;
}
exports.isImportClause = isImportClause;
/**
 * Return true if node is `NamespaceImport`
 * @param node A TypeScript node
 */
function isNamespaceImport(node) {
    return node.kind === ts.SyntaxKind.NamespaceImport;
}
exports.isNamespaceImport = isNamespaceImport;
/**
 * Return true if node is `NamedImports`
 * @param node A TypeScript node
 */
function isNamedImports(node) {
    return node.kind === ts.SyntaxKind.NamedImports;
}
exports.isNamedImports = isNamedImports;
/**
 * Return true if node is `ImportSpecifier`
 * @param node A TypeScript node
 */
function isImportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ImportSpecifier;
}
exports.isImportSpecifier = isImportSpecifier;
/**
 * Return true if node is `ExportAssignment`
 * @param node A TypeScript node
 */
function isExportAssignment(node) {
    return node.kind === ts.SyntaxKind.ExportAssignment;
}
exports.isExportAssignment = isExportAssignment;
/**
 * Return true if node is `ExportDeclaration`
 * @param node A TypeScript node
 */
function isExportDeclaration(node) {
    return node.kind === ts.SyntaxKind.ExportDeclaration;
}
exports.isExportDeclaration = isExportDeclaration;
/**
 * Return true if node is `NamedExports`
 * @param node A TypeScript node
 */
function isNamedExports(node) {
    return node.kind === ts.SyntaxKind.NamedExports;
}
exports.isNamedExports = isNamedExports;
/**
 * Return true if node is `ExportSpecifier`
 * @param node A TypeScript node
 */
function isExportSpecifier(node) {
    return node.kind === ts.SyntaxKind.ExportSpecifier;
}
exports.isExportSpecifier = isExportSpecifier;
/**
 * Return true if node is `MissingDeclaration`
 * @param node A TypeScript node
 */
function isMissingDeclaration(node) {
    return node.kind === ts.SyntaxKind.MissingDeclaration;
}
exports.isMissingDeclaration = isMissingDeclaration;
/**
 * Return true if node is `ExternalModuleReference`
 * @param node A TypeScript node
 */
function isExternalModuleReference(node) {
    return node.kind === ts.SyntaxKind.ExternalModuleReference;
}
exports.isExternalModuleReference = isExternalModuleReference;
/**
 * Return true if node is `JsxElement`
 * @param node A TypeScript node
 */
function isJsxElement(node) {
    return node.kind === ts.SyntaxKind.JsxElement;
}
exports.isJsxElement = isJsxElement;
/**
 * Return true if node is `JsxSelfClosingElement`
 * @param node A TypeScript node
 */
function isJsxSelfClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxSelfClosingElement;
}
exports.isJsxSelfClosingElement = isJsxSelfClosingElement;
/**
 * Return true if node is `JsxOpeningElement`
 * @param node A TypeScript node
 */
function isJsxOpeningElement(node) {
    return node.kind === ts.SyntaxKind.JsxOpeningElement;
}
exports.isJsxOpeningElement = isJsxOpeningElement;
/**
 * Return true if node is `JsxClosingElement`
 * @param node A TypeScript node
 */
function isJsxClosingElement(node) {
    return node.kind === ts.SyntaxKind.JsxClosingElement;
}
exports.isJsxClosingElement = isJsxClosingElement;
/**
 * Return true if node is `JsxAttribute`
 * @param node A TypeScript node
 */
function isJsxAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxAttribute;
}
exports.isJsxAttribute = isJsxAttribute;
/**
 * Return true if node is `JsxAttributes`
 * @param node A TypeScript node
 */
function isJsxAttributes(node) {
    return node.kind === ts.SyntaxKind.JsxAttributes;
}
exports.isJsxAttributes = isJsxAttributes;
/**
 * Return true if node is `JsxSpreadAttribute`
 * @param node A TypeScript node
 */
function isJsxSpreadAttribute(node) {
    return node.kind === ts.SyntaxKind.JsxSpreadAttribute;
}
exports.isJsxSpreadAttribute = isJsxSpreadAttribute;
/**
 * Return true if node is `JsxExpression`
 * @param node A TypeScript node
 */
function isJsxExpression(node) {
    return node.kind === ts.SyntaxKind.JsxExpression;
}
exports.isJsxExpression = isJsxExpression;
/**
 * Return true if node is `CaseClause`
 * @param node A TypeScript node
 */
function isCaseClause(node) {
    return node.kind === ts.SyntaxKind.CaseClause;
}
exports.isCaseClause = isCaseClause;
/**
 * Return true if node is `DefaultClause`
 * @param node A TypeScript node
 */
function isDefaultClause(node) {
    return node.kind === ts.SyntaxKind.DefaultClause;
}
exports.isDefaultClause = isDefaultClause;
/**
 * Return true if node is `HeritageClause`
 * @param node A TypeScript node
 */
function isHeritageClause(node) {
    return node.kind === ts.SyntaxKind.HeritageClause;
}
exports.isHeritageClause = isHeritageClause;
/**
 * Return true if node is `CatchClause`
 * @param node A TypeScript node
 */
function isCatchClause(node) {
    return node.kind === ts.SyntaxKind.CatchClause;
}
exports.isCatchClause = isCatchClause;
/**
 * Return true if node is `PropertyAssignment`
 * @param node A TypeScript node
 */
function isPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.PropertyAssignment;
}
exports.isPropertyAssignment = isPropertyAssignment;
/**
 * Return true if node is `ShorthandPropertyAssignment`
 * @param node A TypeScript node
 */
function isShorthandPropertyAssignment(node) {
    return node.kind === ts.SyntaxKind.ShorthandPropertyAssignment;
}
exports.isShorthandPropertyAssignment = isShorthandPropertyAssignment;
/**
 * Return true if node is `SpreadAssignment`
 * @param node A TypeScript node
 */
function isSpreadAssignment(node) {
    return node.kind === ts.SyntaxKind.SpreadAssignment;
}
exports.isSpreadAssignment = isSpreadAssignment;
/**
 * Return true if node is `EnumMember`
 * @param node A TypeScript node
 */
function isEnumMember(node) {
    return node.kind === ts.SyntaxKind.EnumMember;
}
exports.isEnumMember = isEnumMember;
/**
 * Return true if node is `SourceFile`
 * @param node A TypeScript node
 */
function isSourceFile(node) {
    return node.kind === ts.SyntaxKind.SourceFile;
}
exports.isSourceFile = isSourceFile;
/**
 * Return true if node is `Bundle`
 * @param node A TypeScript node
 */
function isBundle(node) {
    return node.kind === ts.SyntaxKind.Bundle;
}
exports.isBundle = isBundle;
/**
 * Return true if node is `JSDocTypeExpression`
 * @param node A TypeScript node
 */
function isJSDocTypeExpression(node) {
    return node.kind === ts.SyntaxKind.JSDocTypeExpression;
}
exports.isJSDocTypeExpression = isJSDocTypeExpression;
/**
 * Return true if node is `JSDocAllType`
 * @param node A TypeScript node
 */
function isJSDocAllType(node) {
    return node.kind === ts.SyntaxKind.JSDocAllType;
}
exports.isJSDocAllType = isJSDocAllType;
/**
 * Return true if node is `JSDocUnknownType`
 * @param node A TypeScript node
 */
function isJSDocUnknownType(node) {
    return node.kind === ts.SyntaxKind.JSDocUnknownType;
}
exports.isJSDocUnknownType = isJSDocUnknownType;
/**
 * Return true if node is `JSDocArrayType`
 * @param node A TypeScript node
 */
// export function isJSDocArrayType(node: ts.Node): node is ts.JSDocArrayType {
//     return node.kind === ts.SyntaxKind.JSDocArrayType;
// }
/**
 * Return true if node is `JSDocUnionType`
 * @param node A TypeScript node
 */
// export function isJSDocUnionType(node: ts.Node): node is ts.JSDocUnionType {
//     return node.kind === ts.SyntaxKind.JSDocUnionType;
// }
/**
 * Return true if node is `JSDocTupleType`
 * @param node A TypeScript node
 */
// export function isJSDocTupleType(node: ts.Node): node is ts.JSDocTupleType {
//     return node.kind === ts.SyntaxKind.JSDocTupleType;
// }
/**
 * Return true if node is `JSDocNullableType`
 * @param node A TypeScript node
 */
function isJSDocNullableType(node) {
    return node.kind === ts.SyntaxKind.JSDocNullableType;
}
exports.isJSDocNullableType = isJSDocNullableType;
/**
 * Return true if node is `JSDocNonNullableType`
 * @param node A TypeScript node
 */
function isJSDocNonNullableType(node) {
    return node.kind === ts.SyntaxKind.JSDocNonNullableType;
}
exports.isJSDocNonNullableType = isJSDocNonNullableType;
/**
 * Return true if node is `JSDocRecordType`
 * @param node A TypeScript node
 */
// export function isJSDocRecordType(node: ts.Node): node is ts.JSDocRecordType {
//     return node.kind === ts.SyntaxKind.JSDocRecordType;
// }
/**
 * Return true if node is `JSDocRecordMember`
 * @param node A TypeScript node
 */
// export function isJSDocRecordMember(node: ts.Node): node is ts.JSDocRecordMember {
//     return node.kind === ts.SyntaxKind.JSDocRecordMember;
// }
/**
 * Return true if node is `JSDocTypeReference`
 * @param node A TypeScript node
 */
// export function isJSDocTypeReference(node: ts.Node): node is ts.JSDocTypeReference {
//     return node.kind === ts.SyntaxKind.JSDocTypeReference;
// }
/**
 * Return true if node is `JSDocOptionalType`
 * @param node A TypeScript node
 */
function isJSDocOptionalType(node) {
    return node.kind === ts.SyntaxKind.JSDocOptionalType;
}
exports.isJSDocOptionalType = isJSDocOptionalType;
/**
 * Return true if node is `JSDocFunctionType`
 * @param node A TypeScript node
 */
function isJSDocFunctionType(node) {
    return node.kind === ts.SyntaxKind.JSDocFunctionType;
}
exports.isJSDocFunctionType = isJSDocFunctionType;
/**
 * Return true if node is `JSDocVariadicType`
 * @param node A TypeScript node
 */
function isJSDocVariadicType(node) {
    return node.kind === ts.SyntaxKind.JSDocVariadicType;
}
exports.isJSDocVariadicType = isJSDocVariadicType;
/**
 * Return true if node is `JSDocConstructorType`
 * @param node A TypeScript node
 */
// export function isJSDocConstructorType(node: ts.Node): node is ts.JSDocConstructorType {
//     return node.kind === ts.SyntaxKind.JSDocConstructorType;
// }
/**
 * Return true if node is `JSDocThisType`
 * @param node A TypeScript node
 */
// export function isJSDocThisType(node: ts.Node): node is ts.JSDocThisType {
//     return node.kind === ts.SyntaxKind.JSDocThisType;
// }
/**
 * Return true if node is `JSDocTag`
 * @param node A TypeScript node
 */
function isJSDocTag(node) {
    return node.kind === ts.SyntaxKind.JSDocTag;
}
exports.isJSDocTag = isJSDocTag;
/**
 * Return true if node is `JSDocAugmentsTag`
 * @param node A TypeScript node
 */
function isJSDocAugmentsTag(node) {
    return node.kind === ts.SyntaxKind.JSDocAugmentsTag;
}
exports.isJSDocAugmentsTag = isJSDocAugmentsTag;
/**
 * Return true if node is `JSDocParameterTag`
 * @param node A TypeScript node
 */
function isJSDocParameterTag(node) {
    return node.kind === ts.SyntaxKind.JSDocParameterTag;
}
exports.isJSDocParameterTag = isJSDocParameterTag;
/**
 * Return true if node is `JSDocReturnTag`
 * @param node A TypeScript node
 */
function isJSDocReturnTag(node) {
    return node.kind === ts.SyntaxKind.JSDocReturnTag;
}
exports.isJSDocReturnTag = isJSDocReturnTag;
/**
 * Return true if node is `JSDocTypeTag`
 * @param node A TypeScript node
 */
function isJSDocTypeTag(node) {
    return node.kind === ts.SyntaxKind.JSDocTypeTag;
}
exports.isJSDocTypeTag = isJSDocTypeTag;
/**
 * Return true if node is `JSDocTemplateTag`
 * @param node A TypeScript node
 */
function isJSDocTemplateTag(node) {
    return node.kind === ts.SyntaxKind.JSDocTemplateTag;
}
exports.isJSDocTemplateTag = isJSDocTemplateTag;
/**
 * Return true if node is `JSDocTypedefTag`
 * @param node A TypeScript node
 */
function isJSDocTypedefTag(node) {
    return node.kind === ts.SyntaxKind.JSDocTypedefTag;
}
exports.isJSDocTypedefTag = isJSDocTypedefTag;
/**
 * Return true if node is `JSDocPropertyTag`
 * @param node A TypeScript node
 */
function isJSDocPropertyTag(node) {
    return node.kind === ts.SyntaxKind.JSDocPropertyTag;
}
exports.isJSDocPropertyTag = isJSDocPropertyTag;
/**
 * Return true if node is `JSDocTypeLiteral`
 * @param node A TypeScript node
 */
function isJSDocTypeLiteral(node) {
    return node.kind === ts.SyntaxKind.JSDocTypeLiteral;
}
exports.isJSDocTypeLiteral = isJSDocTypeLiteral;
/**
 * Return true if node is `JSDocLiteralType`
 * @param node A TypeScript node
 */
// export function isJSDocLiteralType(node: ts.Node): node is ts.JSDocLiteralType {
//     return node.kind === ts.SyntaxKind.JSDocLiteralType;
// }
/**
 * Return true if node is `SyntaxList`
 * @param node A TypeScript node
 */
function isSyntaxList(node) {
    return node.kind === ts.SyntaxKind.SyntaxList;
}
exports.isSyntaxList = isSyntaxList;
/**
 * Return true if node is `NotEmittedStatement`
 * @param node A TypeScript node
 */
function isNotEmittedStatement(node) {
    return node.kind === ts.SyntaxKind.NotEmittedStatement;
}
exports.isNotEmittedStatement = isNotEmittedStatement;
/**
 * Return true if node is `PartiallyEmittedExpression`
 * @param node A TypeScript node
 */
function isPartiallyEmittedExpression(node) {
    return node.kind === ts.SyntaxKind.PartiallyEmittedExpression;
}
exports.isPartiallyEmittedExpression = isPartiallyEmittedExpression;
/**
 * Return true if node is `IntersectionTypeNode`
 * @param node A TypeScript node
 */
function isIntersectionTypeNode(node) {
    return node.kind === ts.SyntaxKind.IntersectionType;
}
exports.isIntersectionTypeNode = isIntersectionTypeNode;
/**
 * Return true if node is `LiteralTypeNode`
 * @param node A TypeScript node
 */
function isTypeLiteralNode(node) {
    return node.kind === ts.SyntaxKind.TypeLiteral;
}
exports.isTypeLiteralNode = isTypeLiteralNode;
/**
 * Return true if node is `GetAccessorDeclaration`
 * @param node A TypeScript node
 */
function isGetAccessorDeclaration(node) {
    return node.kind === ts.SyntaxKind.GetAccessor;
}
exports.isGetAccessorDeclaration = isGetAccessorDeclaration;
//# sourceMappingURL=isKind.js.map