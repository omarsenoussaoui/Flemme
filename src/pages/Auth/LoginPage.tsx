import { Card, Row, Col, Image } from "antd";
import Login from "../../components/Auth/Login";
import { useTranslation } from "react-i18next";
import { ASSETS } from "../../assets/assets";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", padding: "10px" }}
    >
      <Col>
        <div className="text-center mb-6">
          <div
            className="logo text-2xl font-bold text-primary-600"
            style={{ fontSize: "90px", fontWeight: "bold" }}
          >
            Flemme
          </div>
        </div>

        <Card
          title={t("login")}
          className="shadow-md rounded-lg"
          style={{ padding: "20px", width: "400px" }}
        >
          <Login />
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;
