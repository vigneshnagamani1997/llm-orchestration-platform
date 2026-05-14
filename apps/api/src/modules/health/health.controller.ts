import { Request, Response }
from "express";

export class HealthController {

  static check(
    req: Request,
    res: Response
  ) {

    res.json({
      success: true,
      message:
        "LLM Orchestration API Running"
    });

  }

}