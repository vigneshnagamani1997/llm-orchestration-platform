import { RagService }
from "../modules/rag/rag.service";

export class VectorSearchTool {

  static async search(
    repo: string,
    question: string
  ) {

    return RagService.query(
      repo,
      question
    );

  }

}