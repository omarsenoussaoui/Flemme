import { useState } from "react";
import { Form, Input, Button, message, Typography, Alert, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import AuthService from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { RegisterRequest } from "../../Models/Auth";
const { Text } = Typography;

const Register = () => {
  const { t } = useTranslation();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: RegisterRequest) => {
    setLoading(true);
    setAlertMessage(null);
    try {
      await AuthService.register(values);
      setAlertMessage(t("register_success"));
      setAlertType("success");
      message.success(t("register_success"));
      setTimeout(() => navigate("/"), 1500);
    } catch (error: any) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;

        if (Array.isArray(errorData.errors)) {
          const errorMessages = errorData.errors.join("\n");
          setAlertMessage(errorMessages);
        } else if (typeof errorData.errors === "object") {
          const errorMessages = Object.values(errorData.errors)
            .flat()
            .join("\n");
          setAlertMessage(errorMessages);
        } else {
          setAlertMessage(t("register_failed"));
        }
      } else {
        setAlertMessage(t("register_failed"));
      }

      setAlertType("error");
      message.error(t("register_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ width: "100%" }}>
      {alertMessage && (
        <Alert
          message={alertMessage}
          description={
            <div>
              {alertMessage.split("\n").map((msg, index) => (
                <div key={index}>{msg}</div>
              ))}
            </div>
          }
          type={alertType as "success" | "error"}
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}

      {/* Row for two fields per line */}
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("userName")}
            name="userName"
            rules={[{ required: true, message: t("username_required") }]}
            className="mb-4"
          >
            <Input size="large" placeholder={t("enter_username")} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("email")}
            name="email"
            rules={[
              { required: true, message: t("email_required") },
              { type: "email", message: t("valid_email_required") },
            ]}
            className="mb-4"
          >
            <Input placeholder={t("enter_email")} size="large" className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("password")}
            name="password"
            rules={[
              { required: true, message: t("password_required") },
              { min: 6, message: t("password_min_length") },
            ]}
            hasFeedback
            className="mb-4"
          >
            <Input.Password size="large" placeholder={t("enter_password")} className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("confirmPassword")}
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: t("confirm_password_required") },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t("passwords_do_not_match")));
                },
              }),
            ]}
            className="mb-4"
          >
            <Input.Password size="large" placeholder={t("confirm_password")} className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("firstname")}
            name="firstname"
            rules={[{ required: true, message: t("firstname_required") }]}
            className="mb-4"
          >
            <Input placeholder={t("enter_firstname")} size="large" className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("lastName")}
            name="lastName"
            rules={[{ required: true, message: t("lastName_required") }]}
            className="mb-4"
          >
            <Input placeholder={t("enter_lastname")} size="large" className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("company")}
            name="CompanyName"
            rules={[{ required: true, message: t("company_required") }]}
            className="mb-4"
          >
            <Input placeholder={t("enter_company")} size="large" className="w-full" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            label={t("companyEmail")}
            name="companyEmail"
            rules={[
              { required: true, message: t("companyEmail_required") },
              { type: "email", message: t("valid_email_required") },
            ]}
            className="mb-4"
          >
            <Input placeholder={t("enter_company_email")} size="large" className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24}>
          <Form.Item
            label={t("adresse")}
            name="address"
            rules={[{ required: true, message: t("adresse_required") }]}
            className="mb-4"
          >
            <Input placeholder={t("enter_adresse")} size="large" className="w-full" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: "var(--primary-600)", borderColor: "var(--primary-600)", width: '100%' }}
          size="large"
        >
          {t("registerSubmit")}
        </Button>
      </Form.Item>

      <div className="text-center mt-6">
        <Text>
          {t("have_account")} <Link to="/">{t("login")}</Link>
        </Text>
      </div>
    </Form>
  );
};

export default Register;
