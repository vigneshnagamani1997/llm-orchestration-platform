import ts from "typescript";

export function extractClasses(
  sourceFile: ts.SourceFile
) {

  const classes: { type: string; name: string; code: string; }[] = [];

  function visit(
    node: ts.Node
  ) {

    if (
      ts.isClassDeclaration(node)
    ) {

      classes.push({

        type: "class",

        name:
          node.name?.getText() ||
          "anonymous",

        code:
          node.getText()

      });

    }

    ts.forEachChild(
      node,
      visit
    );

  }

  visit(sourceFile);

  return classes;

}