
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchGithubProfile } from "../services/github.service";
import { ingestRepository } from "../services/repository.service";

export default function HomePage(){

  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [data,setData] = useState<any>(null);

  const search = async () => {
    const response = await fetchGithubProfile(username);
    setData(response.data);
  };

  const analyze = async (repoUrl:string) => {

    const response = await ingestRepository(repoUrl);

    localStorage.setItem(
      "collectionName",
      response.data.collectionName
    );

    navigate("/workspace");
  };

  return(
    <div className="space-y-8">

      <h1 className="page-title">
        LLM Orchestration Platform
      </h1>

      <div className="card flex gap-4">
        <input
          className="input"
          placeholder="GitHub Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <button
          className="button"
          onClick={search}
        >
          Search
        </button>
      </div>

      {data && (
        <div className="grid gap-6">

          {data.repositories.map((repo:any)=>(
            <div key={repo.id} className="card">

              <h2 className="text-2xl font-semibold mb-2">
                {repo.name}
              </h2>

              <p className="text-slate-400 mb-4">
                {repo.description}
              </p>

              <button
                className="button"
                onClick={()=>analyze(repo.html_url)}
              >
                Analyze Repository
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}
