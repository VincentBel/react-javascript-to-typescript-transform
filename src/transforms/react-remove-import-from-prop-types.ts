import * as ts from 'typescript';

import * as helpers from '../helpers';

export type Factory = ts.TransformerFactory<ts.SourceFile>;

/**
 * Remove `import PropTypes from 'prop-types'` declaration
 *
 * @example
 * Before:
 * import PropTypes from 'prop-types'
 * import React from 'rect'
 *
 * After
 * import React from 'rect'
 */
export function reactRemoveImportFromPropTypesModuleTransformFactoryFactory(typeChecker: ts.TypeChecker): Factory{
    return function reactRemoveImportFromPropTypesModuleTransformFactory(context: ts.TransformationContext) {
        return function reactRemoveImportFromPropTypesModuleTransform(sourceFile: ts.SourceFile) {
            return ts.updateSourceFileNode(
                sourceFile,
                sourceFile.statements.filter(s => {
                  return !(
                    ts.isImportDeclaration(s) &&
                    ts.isStringLiteral(s.moduleSpecifier) &&
                    s.moduleSpecifier.text === 'prop-types'
                  )
                }),
            );
        }
    }
}
