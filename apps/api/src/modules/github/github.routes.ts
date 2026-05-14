import { Router }
from "express";

import {
  GithubController
}
from "./github.controller";

const router = Router();

router.get(
  "/:username",
  GithubController.analyze
);

export default router;