import { BaseAgent }
from "../base/base.agent";

import { LLMService }
from "../../modules/llm/llm.service";

export class DocsAgent
extends BaseAgent {

  async execute(
    input: any
  ) {

    const prompt = `
    Generate repository
    documentation.

    Include:
    - architecture
    - setup
    - APIs
    - usage

    Repository:
    ${JSON.stringify(input)}
    `;

    return LLMService.generate(
      prompt
    );

  }

}