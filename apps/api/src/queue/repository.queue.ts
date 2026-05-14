import { Queue } from "bullmq";

import { redis }
from "./redis";

export const repositoryQueue =
  new Queue(
    "repository-ingestion",
    {
      connection: redis
    }
  );