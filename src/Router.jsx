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
  SocialApps,
  CardInfo,
  AboutUs,
  Footer,
  NotFound,
} from "src/Routes.jsx";

export const Router = () => {
  const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="vertification-code" element={<VertificationCodePage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Index />
              </PrivateRoute>
            }
          />
          <Route
            path="financial-assistance"
            element={
              <PrivateRoute>
                <FinancialAssistance />
              </PrivateRoute>
            }
          />
          <Route
            path="non-financial-assistance"
            element={
              <PrivateRoute>
                <NonFinancialAssistance />
              </PrivateRoute>
            }
          />
          <Route
            path="sliders"
            element={
              <PrivateRoute>
                <Sliders />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          >
            <Route
              index
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="change-contactus"
              element={
                <PrivateRoute>
                  <ContactUs />
                </PrivateRoute>
              }
            >
              <Route
                index
                element={
                  <PrivateRoute>
                    <ContactUs />
                  </PrivateRoute>
                }
              />
              <Route
                path="social-apps"
                element={
                  <PrivateRoute>
                    <SocialApps />
                  </PrivateRoute>
                }
              />
              <Route
                path="card-information"
                element={
                  <PrivateRoute>
                    <CardInfo />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="change-aboutus"
              element={
                <PrivateRoute>
                  <AboutUs />
                </PrivateRoute>
              }
            />
            <Route
              path="change-footer"
              element={
                <PrivateRoute>
                  <Footer />
                </PrivateRoute>
              }
            />
          </Route>
        </Route>
        <Route path="404" element={<NotFound />} />
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>
    </BrowserRouter>
  );
};
