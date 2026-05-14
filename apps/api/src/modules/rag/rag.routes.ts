import { Router }
from "express";

import { RagController }
from "./rag.controller";

const router = Router();

router.post(
  "/query",
  RagController.query
);

export default router;