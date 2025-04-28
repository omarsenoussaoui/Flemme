import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert, message } from "antd";
import { useTranslation } from "react-i18next";
import ProfileService from "../../services/profileService";
import { UserInfoProfile } from "../../Models/Profile";

const PersonalInfoForm: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoProfile  | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await ProfileService.getUserInfo();
        setUserInfo(userData);
        // Initialize the form with user data
        form.setFieldsValue({
          firstName: userData.firstName,
          lastName: userData.lastName,
          phoneNumber: userData.phoneNumber
        });
      } catch (error) {
        console.error(error);
        message.error(t("failed_to_fetch_user_info"));
      }
    };

    fetchUserInfo();
  }, [form, t]);

  const handleSave = async (values: any) => {
    try {
      setLoading(true);
      await ProfileService.updateProfile(values);
      setAlertMessage(t("profile_updated_successfully"));
      setAlertType("success");
      message.success(t("profile_updated_successfully"));
    } catch (error) {
      console.error(error);
      setAlertMessage(t("profile_update_failed"));
      setAlertType("error");
      message.error(t("profile_update_failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {alertMessage && (
        <Alert
          message={alertMessage}
          type={alertType as "success" | "error"}
          showIcon
          closable
          style={{ marginBottom: 16 }}
        />
      )}
      <Form layout="vertical" form={form} onFinish={handleSave}>
        <Form.Item label={t("first_name")} name="firstName" rules={[{ required: true }]}>
          <Input placeholder={t("first_name")} />
        </Form.Item>

        <Form.Item label={t("last_name")} name="lastName" rules={[{ required: true }]}>
          <Input placeholder={t("last_name")} />
        </Form.Item>

        <Form.Item label={t("phone")} name="phoneNumber" rules={[{ required: true }]}>
          <Input placeholder="+213 655 77 16 82" />
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

export default PersonalInfoForm;
