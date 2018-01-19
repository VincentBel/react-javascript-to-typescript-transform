#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var glob = require("glob");
var fs = require("fs");
var path = require("path");
var _1 = require(".");
program
    .version('1.0.0')
    .usage('[options] <filename or glob>')
    .command('* <glob>')
    .action(function (globPattern) {
    if (!globPattern) {
        throw new Error('You must provide a file name or glob pattern to transform');
    }
    var files = glob.sync(globPattern, {});
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        var filePath = path.resolve(file);
        var newPath = filePath.replace(/\.jsx?$/, '.tsx');
        try {
            fs.renameSync(filePath, newPath);
            var result = _1.run(newPath);
            fs.writeFileSync(newPath, result);
        }
        catch (error) {
            console.warn("Failed to convert " + file);
            console.warn(error);
        }
    }
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map