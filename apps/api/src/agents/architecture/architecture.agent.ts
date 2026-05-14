import { BaseAgent }
  from "../base/base.agent";
import { LLMService }
  from "../../modules/llm/llm.service";
export class ArchitectureAgent
  extends BaseAgent {
  async execute(
    input: any
  ) {
    const prompt = `
Analyze repository architecture.
Dependency Graph:
${JSON.stringify(input.graph)}
Functions:
${JSON.stringify(input.functions)}
Classes:
${JSON.stringify(input.classes)}
Detect:
- MVC
- Layered
- Clean Architecture
- Monolith
- Microservices
`;
    return LLMService.generate(
      prompt
    );
  }
}