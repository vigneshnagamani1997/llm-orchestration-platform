import { Request, Response } from "express";

import { OrchestratorService }from "./orchestrator.service";

export class OrchestratorController {

  static async analyze(
    req: Request,
    res: Response
  ) {

    try {

      const response =
        await OrchestratorService
        .run(req.body);

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