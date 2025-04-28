import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider, Layout } from "antd";
import i18n from "../src/configurations/i18n";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import { useAuth } from "./context/AuthContext";
import './index.css' // <-- Tailwind styles
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import ConfirmEmailPage from "./pages/Auth/ConfirmEmailPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import HomePage from "./pages/Home/HomePage";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [direction, setDirection] = useState<"ltr" | "rtl">(
    i18n.language === "ar" ? "rtl" : "ltr"
  );

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      const newDir = lng === "ar" ? "rtl" : "ltr";
      document.documentElement.setAttribute("dir", newDir);
      setDirection(newDir);
    };

    handleLanguageChange(i18n.language);
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);
  const { user } = useAuth(); 

  return (
    <Router>
      <ConfigProvider direction={direction}>
        <Layout>
          <Header
            style={{
              padding: "0 0px",
              background: "#fff",
              borderBottom: "1px solid #e8e8e8",
            }}
          >
            <Navbar />
          </Header>

          <Layout>
          {user && (
              <Sider width={250} style={{ background: "#f8f9fa" }}>
                <Sidebar />
              </Sider>
            )}

            <Content
              style={{
                margin: "10px",
                background: "#fff",
                padding: "24px",
                minHeight: "calc(100vh - 128px)",
              }}
            >
              <Routes>
              <Route
                  path="/login"
                  element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
                />
                <Route
                  path="/register"
                  element={user ? <Navigate to="/dashboard" /> : <RegisterPage />}
                />
                <Route
                  path="/ForgotPassword"
                  element={<ForgotPasswordPage />}
                />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/confirm-email" element={<ConfirmEmailPage />} />
                <Route element={<PrivateRoute />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/Account" element={<ProfilePage />} />
                </Route>

                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </Router>
  );
};

export default App;