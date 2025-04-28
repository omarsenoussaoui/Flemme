import * as React from "react";
import { Form, Input, Button, message, Alert } from "antd";
import { useTranslation } from "react-i18next";
import { ChangePasswordRequest } from "../../Models/Profile";
import ProfileService from "../../services/profileService";
import { useState } from "react";

const ChangePasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);

  const handleChangePassword = async (values: ChangePasswordRequest) => {
    try {
      setLoading(true);
      await ProfileService.changePassword(values);
      message.success(t("password_updated_successfully"));
      setAlertMessage(null);
      form.resetFields();
    } catch (error) {
      console.error(error);
      setAlertMessage(t("password_update_failed"));
      setAlertType("error");
      message.error(t("password_update_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {alertMessage && (
        <Alert
          message={alertMessage}
          type={alertType ?? "error"}
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}

      <Form layout="vertical" form={form} onFinish={handleChangePassword}>
        <Form.Item
          label={t("current_password")}
          name="oldPassword"
          rules={[{ required: true, message: t("requiredField") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={t("new_password")}
          name="password"
          rules={[{ required: true, message: t("requiredField") }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label={t("confirm_password")}
          name="confimedPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: t("requiredField") },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t("passwords_do_not_match")));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            {t("save")}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ChangePasswordForm;
