
import { useState } from "react";

import { askRepository } from "../services/rag.service";
import { analyzeRepository } from "../services/orchestrator.service";

export default function RepositoryPage(){

  const repo = localStorage.getItem("collectionName");

  const [question,setQuestion] = useState("");
  const [response,setResponse] = useState<any>(null);

  const askAI = async () => {

    if(!repo) return;

    const result = await askRepository(
      repo,
      question
    );

    setResponse(result);
  };

  const analyze = async () => {

    if(!repo) return;

    const result = await analyzeRepository(repo);

    setResponse(result);
  };

  return(
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="page-title">
          Repository Workspace
        </h1>

        <button
          className="button"
          onClick={analyze}
        >
          Run Analysis
        </button>
      </div>

      <div className="card flex gap-4">

        <input
          className="input"
          placeholder="Ask repository question"
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
        />

        <button
          className="button"
          onClick={askAI}
        >
          Ask AI
        </button>

      </div>

      <div className="card">
        <pre className="overflow-auto whitespace-pre-wrap">
          {JSON.stringify(response,null,2)}
        </pre>
      </div>

    </div>
  );
}
