import { Worker } from "bullmq";

import { redis }
from "./redis";

import { RepositoryService }
from "../modules/repositories/repository.service";

export const repositoryWorker =
  new Worker(
    "repository-ingestion",

    async (job) => {

      return RepositoryService.ingest(
        job.data.repoUrl
        );
    },
    {
      connection: redis
    }
  );