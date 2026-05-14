
import { api } from "../api/client";

export async function analyzeRepository(repo:string){
  const response = await api.post(
    "/orchestrator/analyze",
    {
      repo,
      question:"Analyze repository"
    }
  );

  return response.data;
}
