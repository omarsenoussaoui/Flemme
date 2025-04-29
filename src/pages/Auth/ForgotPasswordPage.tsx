import { Card, Row, Col, Image } from "antd";
import { useTranslation } from "react-i18next";
import { ASSETS } from "../../assets/assets";
import ForgotPasswordForm from "../../components/Auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  const { t } = useTranslation();

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <div
            className="logo text-2xl font-bold text-primary-600"
            style={{ fontSize: "90px", fontWeight: "bold" }}
          >
            Flemme
          </div>
        </div>
        <Card title={t("forgotPassword")} bordered={false}>
          <ForgotPasswordForm />
        </Card>
      </Col>
    </Row>
  );
};

export default ForgotPasswordPage;
