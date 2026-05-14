import axios from "axios";

import { env }
from "../../config/env";

export class LLMService {

  static async generate(
    prompt: string
  ) {

    const response =
      await axios.post(
        `${env.ollamaUrl}/api/generate`,
        {
          model: "llama3.1",
          prompt,
          stream: false
        }
      );

    return response.data.response;
  }

}