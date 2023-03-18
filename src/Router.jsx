import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("pages/login/login"));
const DashboardPage = lazy(() => import("pages/dashboard/dashboard"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};
