import { Request, Response }
from "express";

import { RagService }
from "./rag.service";

export class RagController {

  static async query(
    req: Request,
    res: Response
  ) {

    try {

      const {
        repo,
        question
      } = req.body;

      const response =
        await RagService.query(
          repo,
          question
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