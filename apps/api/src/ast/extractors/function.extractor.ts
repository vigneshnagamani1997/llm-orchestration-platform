import ts from "typescript";

export function extractFunctions(
  sourceFile: ts.SourceFile
) {

  const functions: { type: string; name: string; code: string; startLine: number; endLine: number; }[] = [];

  function visit(
    node: ts.Node
  ) {

    if (
      ts.isFunctionDeclaration(node)
    ) {

      functions.push({

        type: "function",

        name:
          node.name?.getText() ||
          "anonymous",

        code:
          node.getText(),

        startLine:
          sourceFile
          .getLineAndCharacterOfPosition(
            node.getStart()
          ).line,

        endLine:
          sourceFile
          .getLineAndCharacterOfPosition(
            node.getEnd()
          ).line

      });

    }

    ts.forEachChild(
      node,
      visit
    );

  }

  visit(sourceFile);

  return functions;

}