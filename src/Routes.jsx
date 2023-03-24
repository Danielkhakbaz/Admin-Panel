import { lazy } from "react";

const LoginPage = lazy(() => import("pages/login/login"));
const VertificationCodePage = lazy(() =>
  import("pages/vertification-code/vertification-code")
);
const ForgotPassword = lazy(() =>
  import("pages/forgot-password/forgot-password")
);
const Layout = lazy(() => import("layout/layout"));
const Index = lazy(() => import("pages/dashboard"));
const FinancialAssistance = lazy(() =>
  import("pages/dashboard/financial-assistance/financial-assistance")
);
const NonFinancialAssistance = lazy(() =>
  import("pages/dashboard/non-financial-assistance/non-financial-assistance")
);
const Sliders = lazy(() => import("pages/dashboard/sliders/sliders"));
const Settings = lazy(() => import("pages/dashboard/settings/settings"));
const ContactUs = lazy(() =>
  import("pages/dashboard/settings/contact-us/contact-us")
);
const SocialApps = lazy(() =>
  import("../pages/dashboard/settings/contact-us/social-apps/social-apps")
);
const CardInfo = lazy(() =>
  import("../pages/dashboard/settings/contact-us/card-info/card-info")
);
const AboutUs = lazy(() =>
  import("pages/dashboard/settings/about-us/about-us")
);
const Footer = lazy(() => import("pages/dashboard/settings/footer/footer"));

const NotFound = lazy(() => import("pages/404/404"));

export {
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
  SocialApps,
  CardInfo,
  AboutUs,
  Footer,
  NotFound,
};
