import { useState } from "react";
import { Form, Input, Button, message, Typography, Alert } from "antd";
import { useTranslation } from "react-i18next";
import AuthService from "../../services/authService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const { Text } = Typography;

const Login = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const navigate = useNavigate();

  const onFinish = async (values: { userName: string; password: string }) => {
    setLoading(true);
    setAlertMessage(null); 
    try {
      const response = await AuthService.login(values);
      login(response); // Use the context to log in
      setAlertMessage(t("login_success"));
      setAlertType("success");
      message.success(t("login_success"));
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (error) {
      setAlertMessage(t("login_failed"));
      setAlertType("error");
      message.error(t("login_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical" style={{ width: '100%' }}>
      {alertMessage && (
        <Alert
          message={alertMessage}
          type={alertType as "success" | "error"}
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}
      
      <Form.Item
        label={t("userName")}
        name="userName"
        rules={[{ required: true, message: t("username_required") }]}
        className="mb-4"
      >
        <Input size="large" placeholder={t("enter_username")} className="w-full" />
      </Form.Item>

      <Form.Item
        label={t("password")}
        name="password"
        rules={[{ required: true, message: t("password_required") }]}
        className="mb-6"
      >
        <Input.Password size="large" placeholder={t("enter_password")} className="w-full" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: "var(--primary-600)", borderColor: "var(--primary-600)", width: '100%' }}
          size="large"
        >
          {t("submit")}
        </Button>
      </Form.Item>

      <div className="text-center mt-6">
        <Text>
          {t("no_account")}{" "}
          <Link to="/register">{t("register_free")}</Link>
        </Text>
        <br />
        <Text>
          <Link to="/ForgotPassword">{t("forgot_password")}</Link>
        </Text>
      </div>
    </Form>
  );
};

export default Login;
