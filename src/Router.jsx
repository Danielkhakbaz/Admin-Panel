import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("pages/login/login"));
const Layout = lazy(() => import("layout/layout"));
const Index = lazy(() => import("pages/index/index"));
const Table1 = lazy(() => import("pages/table-1/table-1"));
const Table2 = lazy(() => import("pages/table-2/table-2"));
const Settings = lazy(() => import("pages/settings/settings"));
const NotFound = lazy(() => import("pages/404/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="table-1" element={<Table1 />} />
          <Route path="table-2" element={<Table2 />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
