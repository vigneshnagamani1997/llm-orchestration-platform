import { VectorService }
from "../modules/vector/vector.service";

import { EmbeddingService }
from "../modules/embeddings/embeddings.service";

export class SymbolSearchTool {

  static async search(
    repo: string,
    query: string
  ) {

    const collection =
      await VectorService
      .getCollection(repo);

    const embedding =
      await EmbeddingService
      .generate(query);

    return collection.query({

      queryEmbeddings: [
        embedding
      ],

      nResults: 10

    });

  }

}