
import { api } from "../api/client";

export async function fetchGithubProfile(username:string){
  const response = await api.get(`/github/${username}`);
  return response.data;
}
