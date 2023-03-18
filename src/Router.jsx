import { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // , Navigate
} from "react-router-dom";

const LoginPage = lazy(() => import("pages/login/login"));
// const FormsDescription = lazy(() => import("pages/forms/description"));
// const Forms = lazy(() => import("pages/forms"));
// const FormsResults = lazy(() => import("pages/forms/results"));
// const NotFound = lazy(() => import("pages/404/404"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
