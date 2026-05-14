import { Router }
from "express";

import { LLMController }
from "./llm.controller";

const router = Router();

router.post(
  "/ask",
  LLMController.ask
);

export default router;