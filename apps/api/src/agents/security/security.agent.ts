import { BaseAgent }
from "../base/base.agent";

import { LLMService }
from "../../modules/llm/llm.service";

export class SecurityAgent
extends BaseAgent {

  async execute(
    input: any
  ) {

    const prompt = `
    Analyze this repository
    for security risks.

    Focus on:
    - hardcoded secrets
    - auth flaws
    - unsafe packages
    - injection risks

    Repository:
    ${JSON.stringify(input)}
    `;

    return LLMService.generate(
      prompt
    );

  }

}