import { Router }
from "express";

import { OrchestratorController } from "./orchestrator.controller";

const router = Router();

router.post(
  "/analyze",
  OrchestratorController.analyze
);

export default router;