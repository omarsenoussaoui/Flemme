import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ResetPasswordForm from "../../components/Auth/ResetPasswordForm";
import { Row, Col, Card, Image } from "antd";
import { t } from "i18next";
import { ASSETS } from "../../assets/assets";

const useQuery = () => new URLSearchParams(useLocation().search);

const ResetPasswordPage: React.FC = () => {
  const query = useQuery();
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const emailParam = query.get("email");
    const tokenParam = query.get("token");

    setEmail(emailParam);
    setToken(tokenParam);
  }, [query]);

  return (
    <>
      <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            {/* <Image
              src={ASSETS.LOGO}
              alt="App Logo"
              width={300}
              preview={false}
            /> */}
            <div
              className="logo text-2xl font-bold text-primary-600"
              style={{ fontSize: "90px", fontWeight: "bold" }}
            >
              Flemme
            </div>
          </div>
          <Card title={t("resetPassword")} bordered={false}>
            {email && token ? (
              <ResetPasswordForm token={token} email={email} />
            ) : (
              <p>Invalid or missing reset link.</p>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ResetPasswordPage;
