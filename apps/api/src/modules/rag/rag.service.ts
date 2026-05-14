import { VectorService }
from "../vector/vector.service";

import { EmbeddingService }
from "../embeddings/embeddings.service";

import { LLMService }
from "../llm/llm.service";

export class RagService {

  static async query(
    repo: string,
    question: string
  ) {

    const collection =
      await VectorService
      .getCollection(repo);

    const embedding =
      await EmbeddingService
      .generate(question);

    const results =
      await collection.query({
        queryEmbeddings: [
          embedding
        ],
        nResults: 5
      });

    const context =
      results.documents
      ?.flat()
      .join("\n");

    const prompt = `
    You are an AI code analyst.

    Context:
    ${context}

    Question:
    ${question}
    `;

    return LLMService.generate(
      prompt
    );

  }

}