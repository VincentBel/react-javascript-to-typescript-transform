import * as ts from 'typescript';

import * as helpers from '../helpers';

export type Factory = ts.TransformerFactory<ts.SourceFile>;

/**
 * Remove `import PropTypes from 'prop-types'` declaration
 *
 * @example
 * Before:
 * import React, { Component } from 'rect'
 * class MyComp extends Component {}
 *
 * After:
 * import * as React from 'rect'
 * class MyComp extends React.Component {}
 */
export function reactImportTransformFactoryFactory(typeChecker: ts.TypeChecker): Factory{
    return function reactImportTransformFactory(context: ts.TransformationContext) {
        return function reactImportTransform(sourceFile: ts.SourceFile) {
            return ts.updateSourceFileNode(
                sourceFile,
                sourceFile.statements
                  .map(updateImportDeclarationIfNeeded)
                  .map(updateComponentClassIfNeeded),
            );
        }
    }
}


function updateImportDeclarationIfNeeded(statement: ts.Statement) {
  if (
    ts.isImportDeclaration(statement) &&
    ts.isStringLiteral(statement.moduleSpecifier) &&
    statement.moduleSpecifier.text === 'react'
  ) {
    return ts.createImportDeclaration(
      undefined,
      undefined,
      ts.createImportClause(
        undefined,
        ts.createNamespaceImport(ts.createIdentifier('React'))
      ),
      statement.moduleSpecifier,
    )
  }

  return statement
}

function updateComponentClassIfNeeded(statement: ts.Statement) {
  if (!ts.isClassDeclaration(statement)) {
    return statement
  }

  if (!statement.heritageClauses) {
    return statement;
  }

  if (statement.heritageClauses.length !== 1) {
    return statement;
  }

  const firstHeritageClauses = statement.heritageClauses[0];

  if (firstHeritageClauses.token !== ts.SyntaxKind.ExtendsKeyword) {
    return statement;
  }

  const expressionWithTypeArguments = firstHeritageClauses.types[0];

  if (!expressionWithTypeArguments) {
    return statement;
  }

  if (!ts.isIdentifier(expressionWithTypeArguments.expression)) {
    return statement;
  }

  const typeSymbol = expressionWithTypeArguments.expression.text;

  if (typeSymbol !== 'Component' && typeSymbol !== 'PureComponent') {
    return statement;
  }

  return ts.createClassDeclaration(
    statement.decorators,
    statement.modifiers,
    statement.name,
    statement.typeParameters,
    [
      ts.updateHeritageClause(
        firstHeritageClauses,
        [
          ts.createExpressionWithTypeArguments(
            expressionWithTypeArguments.typeArguments || [],
            ts.createPropertyAccess(
              ts.createIdentifier('React'),
              typeSymbol,
            )
          )
        ]
      )
    ],
    statement.members,
  )
}
