
export default function DashboardPage(){
  return(
    <div className="space-y-6">
      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="card">
          <h2 className="text-xl font-semibold">
            AI Agents
          </h2>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">
            Queue Monitor
          </h2>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold">
            Execution Traces
          </h2>
        </div>

      </div>
    </div>
  );
}
