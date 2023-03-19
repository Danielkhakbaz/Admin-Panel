import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  LoginPage,
  VertificationCodePage,
  ForgotPassword,
  Layout,
  Index,
  FinancialAssistance,
  NonFinancialAssistance,
  Sliders,
  Settings,
  ContactUs,
  AboutUs,
  Footer,
  NotFound,
} from "src/Routes.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="vertification-code" element={<VertificationCodePage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Index />} />
          <Route
            path="financial-assistance"
            element={<FinancialAssistance />}
          />
          <Route
            path="non-financial-assistance"
            element={<NonFinancialAssistance />}
          />
          <Route path="sliders" element={<Sliders />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<Settings />} />
            <Route path="change-contactus" element={<ContactUs />} />
            <Route path="change-aboutus" element={<AboutUs />} />
            <Route path="change-footer" element={<Footer />} />
          </Route>
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </BrowserRouter>
  );
};
