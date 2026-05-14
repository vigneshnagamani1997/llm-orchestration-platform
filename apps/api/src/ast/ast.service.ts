import fs from "fs-extra";

import {
  parseTypeScript
}
from "./parsers/typescript.parser";

import {
  extractFunctions
}
from "./extractors/function.extractor";

import {
  extractClasses
}
from "./extractors/class.extractor";

import {
  extractImports
}
from "./extractors/import.extractor";

export class ASTService {

  static async analyzeFile(
    filePath: string
  ) {

    const code =
      await fs.readFile(
        filePath,
        "utf-8"
      );

    const sourceFile =
      parseTypeScript(code);

    const functions =
      extractFunctions(
        sourceFile
      );

    const classes =
      extractClasses(
        sourceFile
      );

    const imports =
      extractImports(
        sourceFile
      );

    return {

      functions,

      classes,

      imports

    };

  }

}