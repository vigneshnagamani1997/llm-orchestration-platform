import axios from "axios";

export class GithubService {

  static async getProfile(
    username: string
  ) {

    const response =
      await axios.get(
        `https://api.github.com/users/${username}`
      );

    return response.data;

  }

  static async getRepositories(
    username: string
  ) {

    const response =
      await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

    return response.data;

  }

}