import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import AuthService from "../../services/authService";
import { ResetPasswordFormProps } from "../../Models/Auth";
import { passwordValidationRules } from "../../utils/validators/passwordValidationRules"; // Import the validation rules



const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ token, email }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (values: { newPassword: string; confirmPassword: string }) => {
    setAlertMessage(null);
    setLoading(true);

    try {
      const response = await AuthService.resetPassword({
        token,
        email,
        newPassword: values.newPassword,
        confirmPassword: values.confirmPassword,
      });

      if (response.succeeded) {
        setAlertMessage(t("passwordResetSuccess"));
        setAlertType("success");
        form.resetFields();
      } else {
        const errorMsg = response.errors?.[0] || t("somethingWentWrong");
        setAlertMessage(errorMsg);
        setAlertType("error");
      }
    } catch (error: any) {
      const apiError = error?.response?.data?.errors?.[0] || t("somethingWentWrong");
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
          type={alertType || "error"}
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}

      <Form.Item label={t("email")}>
        <Input
          prefix={<MailOutlined />}
          value={email}
          disabled
        />
      </Form.Item>

      <Form.Item
        label={t("newPassword")}
        name="newPassword"
        rules={[
          { required: true, message: t("newPassword_required") },
          passwordValidationRules.minLength,
          passwordValidationRules.uppercase,
          passwordValidationRules.number,
          passwordValidationRules.specialChar,
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t("enterNewPassword")}
        />
      </Form.Item>

      <Form.Item
        label={t("confirmPassword")}
        name="confirmPassword"
        dependencies={["newPassword"]}
        hasFeedback
        rules={[
          { required: true, message: t("confirmPassword_required") },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error(t("passwordsDoNotMatch")));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder={t("confirmNewPassword")}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ backgroundColor: "#F47000", borderColor: "#F47000" }}
        >
          {t("resetPassword")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
