export default function DependencyPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="page-title">Dependencies</h1>

      <div className="glass-card p-6">
        <p className="text-slate-300">
          Dependency intelligence and import graph analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-2">
            AI Insights
          </h2>

          <p className="text-slate-400">
            Real-time orchestration and repository intelligence.
          </p>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-2">
            Agents
          </h2>

          <p className="text-slate-400">
            Multi-agent workflows and execution monitoring.
          </p>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-2">
            Vector Intelligence
          </h2>

          <p className="text-slate-400">
            AST embeddings and semantic search powered by Ollama.
          </p>
        </div>
      </div>
    </div>
  );
}