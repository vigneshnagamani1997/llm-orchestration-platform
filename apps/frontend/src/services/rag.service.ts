
import { api } from "../api/client";

export async function askRepository(repo:string,question:string){
  const response = await api.post(
    "/rag/query",
    { repo, question }
  );

  return response.data;
}
