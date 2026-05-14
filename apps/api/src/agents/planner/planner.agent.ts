import { BaseAgent }
from "../base/base.agent";

import { LLMService }
from "../../modules/llm/llm.service";

export class PlannerAgent
extends BaseAgent {

  async execute(
    input: any
  ) {

    const prompt = `
    Decide which agents
    should handle this request.

    Request:
    ${input.question}

    Available Agents:
    - repo
    - security
    - docs
    - architecture

    Return JSON array only.
    `;

    return LLMService.generate(
      prompt
    );

  }

}