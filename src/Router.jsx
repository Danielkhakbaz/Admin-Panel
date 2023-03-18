import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("pages/login/login"));
const VertificationCodePage = lazy(() =>
  import("pages/vertification-code/vertification-code")
);
const ForgotPassword = lazy(() =>
  import("pages/forgot-password/forgot-password")
);
const Layout = lazy(() => import("layout/layout"));
const Index = lazy(() => import("pages/dashboard"));
const Table1 = lazy(() => import("pages/dashboard/table-1/table-1"));
const Table2 = lazy(() => import("pages/dashboard/table-2/table-2"));
const Settings = lazy(() => import("pages/dashboard/settings/settings"));
const NotFound = lazy(() => import("pages/404/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="vertification-code" element={<VertificationCodePage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="table-1" element={<Table1 />} />
          <Route path="table-2" element={<Table2 />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </BrowserRouter>
  );
};
