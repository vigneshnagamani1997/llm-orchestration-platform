import {
  ChromaClient,
  Collection
} from "chromadb";

const chromaClient =
  new ChromaClient({
    host: "localhost",
    port: 8000,
    ssl: false
  });

const dummyEmbeddingFunction = {
  generate: async (
    texts: string[]
  ) => {

    return texts.map(() => []);

  }
};

export class VectorService {

  static async getCollection(
    name: string
  ): Promise<Collection> {

    try {

      return await chromaClient
        .getCollection({
          name,
          embeddingFunction:
            dummyEmbeddingFunction as any
        });

    } catch {

      return await chromaClient
        .createCollection({
          name,
          embeddingFunction:
            dummyEmbeddingFunction as any
        });

    }

  }

}