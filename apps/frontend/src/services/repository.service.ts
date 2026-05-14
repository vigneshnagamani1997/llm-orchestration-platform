
import { api } from "../api/client";

export async function ingestRepository(repoUrl:string){
  const response = await api.post(
    "/repositories/ingest",
    { repoUrl }
  );

  return response.data;
}
