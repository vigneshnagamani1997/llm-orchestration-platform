import { Request, Response }
from "express";

import { LLMService }
from "./llm.service";

export class LLMController {

  static async ask(
    req: Request,
    res: Response
  ) {

    try {

      const { prompt } = req.body;

      const response =
        await LLMService.generate(
          prompt
        );

      res.json({
        success: true,
        data: response
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error
      });

    }

  }

}