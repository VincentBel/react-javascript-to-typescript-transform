"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var chalk = require("chalk");
/**
 * Compile and return result TypeScript
 * @param filePath Path to file to compile
 */
function compile(filePath, factoryFactories) {
    var compilerOptions = {
        target: ts.ScriptTarget.ES2017,
        module: ts.ModuleKind.ES2015,
    };
    var program = ts.createProgram([filePath], compilerOptions);
    var sourceFiles = program.getSourceFiles().filter(function (sf) { return sf.fileName === filePath; });
    var typeChecker = program.getTypeChecker();
    var result = ts.transform(sourceFiles, factoryFactories.map(function (factoryFactory) { return factoryFactory(typeChecker); }), compilerOptions);
    if (result.diagnostics && result.diagnostics.length) {
        console.log(chalk.yellow("\n        ======================= Diagnostics for " + filePath + " =======================\n        "));
        for (var _i = 0, _a = result.diagnostics; _i < _a.length; _i++) {
            var diag = _a[_i];
            if (diag.file && diag.start) {
                var pos = diag.file.getLineAndCharacterOfPosition(diag.start);
                console.log("(" + pos.line + ", " + pos.character + ") " + diag.messageText);
            }
        }
    }
    var printer = ts.createPrinter();
    // TODO: fix the index 0 access... What if program have multiple source files?
    return printer.printNode(ts.EmitHint.SourceFile, result.transformed[0], sourceFiles[0]);
}
exports.compile = compile;
//# sourceMappingURL=compiler.js.map