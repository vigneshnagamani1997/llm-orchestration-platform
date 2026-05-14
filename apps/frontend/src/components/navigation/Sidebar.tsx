
import { Link } from "react-router-dom";

export default function Sidebar(){
  return(
    <div className="w-72 bg-slate-900 border-r border-slate-800 p-6">
      <h1 className="text-2xl font-bold mb-8">
        LLM Platform
      </h1>

      <div className="grid gap-2">
        <Link className="sidebar-link" to="/">Home</Link>
        <Link className="sidebar-link" to="/dashboard">Dashboard</Link>
        <Link className="sidebar-link" to="/workspace">Workspace</Link>
        <Link className="sidebar-link" to="/settings">Settings</Link>
      </div>
    </div>
  );
}
