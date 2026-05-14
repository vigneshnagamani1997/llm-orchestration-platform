import ts from "typescript";

export function parseTypeScript(
  code: string
) {

  return ts.createSourceFile(
    "temp.ts",
    code,
    ts.ScriptTarget.Latest,
    true
  );

}