import {
  Request,
  Response
} from "express";

import {
  GithubService
} from "./github.service";

interface GithubParams {

  username: string;

}

export class GithubController {

  static async analyze(
    req: Request<GithubParams>,
    res: Response
  ) {

    try {

      const { username } =
        req.params;

      const profile =
        await GithubService
          .getProfile(username);

      const repositories =
        await GithubService
          .getRepositories(
            username
          );

      return res.json({

        success: true,

        data: {

          profile,

          repositories

        }

      });

    } catch (error) {

      console.error(error);

      return res.status(500)
        .json({

          success: false,

          error:
            "GitHub API failed"

        });

    }

  }

}