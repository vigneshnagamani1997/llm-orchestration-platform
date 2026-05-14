import { BaseAgent }
from "../base/base.agent";

import { LLMService }
from "../../modules/llm/llm.service";

import { VectorSearchTool } from "../../tools/vector-search.tool";

export class RepoAgent
extends BaseAgent {

  async execute(
    input: any
  ) {

    const {
      repo,
      question
    } = input;

    const context =
      await VectorSearchTool
      .search(
        repo,
        question
      );

    const prompt = `
    You are a repository
    analysis agent.

    Repository Context:
    ${context}

    Question:
    ${question}

    Analyze carefully.
    `;

    return LLMService.generate(
      prompt
    );

  }

}