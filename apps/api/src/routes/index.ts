import { Router }
from "express";

import healthRoutes
from "../modules/health/health.routes";

import githubRoutes
from "../modules/github/github.routes";

import llmRoutes
from "../modules/llm/llm.routes";
import repositoryRoutes from "../modules/repositories/repository.routes";
import ragRoutes from "../modules/rag/rag.routes";
import orchestratorRoutes from "../orchestrator/orchestrator.routes";

const router = Router();

router.use(
  "/health",
  healthRoutes
);
router.use(
  "/repositories",
  repositoryRoutes
);
router.use(
  "/github",
  githubRoutes
);

router.use(
  "/llm",
  llmRoutes
);

router.use(
  "/rag",
  ragRoutes
);

router.use(
  "/orchestrator",
  orchestratorRoutes
);
export default router;