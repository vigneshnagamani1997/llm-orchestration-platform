import ts from "typescript";

export function extractImports(
  sourceFile: ts.SourceFile
) {

  const imports: { source: string; }[] = [];

  sourceFile.forEachChild(
    node => {

      if (
        ts.isImportDeclaration(node)
      ) {

        imports.push({

          source: (node.moduleSpecifier as ts.StringLiteral).text

        });

      }

    }
  );

  return imports;

}