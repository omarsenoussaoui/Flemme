import  { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { ForgotPasswordRequest } from "../../Models/Auth";
import AuthService from "../../services/authService";

const ForgotPasswordForm: React.FC = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (values: ForgotPasswordRequest) => {
    setAlertMessage(null);  // Clear any previous messages
    setLoading(true);
  
    try {
      const response = await AuthService.forgotPassword(values);
  
      if (response.succeeded) {
        setAlertMessage(t('resetLinkSent', { email: values.email }));
        setAlertType("success");
      } else {
        if (response.errors && response.errors.length > 0) {
          response.errors.forEach((err) => {
            setAlertMessage(err);
            setAlertType("error");
          });
        } else {
          setAlertMessage(t('somethingWentWrong'));
          setAlertType("error");
        }
      }
    } catch (error: any) {
      const apiError = error?.response?.data?.errors?.[0] || t('somethingWentWrong');
      setAlertMessage(apiError);
      setAlertType("error");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      autoComplete="off"
    >
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
        label={t("email")}
        name="email"
        rules={[
          { required: true, message: t("email_required") },
          { type: "email", message: t("valid_email_required") },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          placeholder={t("enter_email")}
          type="email"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: "#5073fa", borderColor: "#5073fa", width: '100%' }}
        >
          {t("sendResetLink")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPasswordForm;
