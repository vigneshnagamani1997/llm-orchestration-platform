import { RepoAgent }
from "../agents/repo/repo.agent";

import { SecurityAgent }
from "../agents/security/security.agent";

import { DocsAgent }
from "../agents/docs/docs.agent";

import { ArchitectureAgent }
from "../agents/architecture/architecture.agent";

export class OrchestratorService {

  static async run(
    input: any
  ) {

    const repoAgent =
      new RepoAgent();

    const securityAgent =
      new SecurityAgent();

    const docsAgent =
      new DocsAgent();

    const architectureAgent =
      new ArchitectureAgent();

    const [
      repository,
      security,
      documentation,
      architecture
    ] = await Promise.all([

      repoAgent.execute(input),

      securityAgent.execute(input),

      docsAgent.execute(input),

      architectureAgent.execute(input)

    ]);

    return {
      repository,
      security,
      documentation,
      architecture
    };

  }

}