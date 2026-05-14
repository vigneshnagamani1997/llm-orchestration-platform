
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import RepositoryPage from "../pages/RepositoryPage";
import SettingsPage from "../pages/SettingsPage";

export default function AppRoutes(){

  return(
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route element={<MainLayout />}>

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/workspace"
          element={<RepositoryPage />}
        />

        <Route
          path="/settings"
          element={<SettingsPage />}
        />

      </Route>

    </Routes>
  );
}
