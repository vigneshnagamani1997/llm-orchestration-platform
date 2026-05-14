export interface FunctionNode {

  type: "function";

  name: string;

  code: string;

  file: string;

  startLine: number;

  endLine: number;

}

export interface ClassNode {

  type: "class";

  name: string;

  code: string;

  file: string;

  startLine: number;

  endLine: number;

}

export interface ImportNode {

  source: string;

  imported: string[];

}