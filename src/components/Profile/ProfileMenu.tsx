
import { Menu, Avatar, Typography } from "antd";
import { UserOutlined, LogoutOutlined, CreditCardOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";

const ProfileMenu = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth(); // Get user data from context
  const { Text } = Typography;

  if (!user) {
    return null; // If no user is logged in, don't render anything
  }

  return (
    <Menu style={{ width: 250, padding: "12px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingBottom: "12px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Avatar size={48} icon={<UserOutlined />} />
        <div>
          <Text strong>{user.fullName || user.userName}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {user.email}
          </Text>
          <br />
          <span
            style={{
              fontSize: "12px",
              color: "#52c41a",
              background: "#f6ffed",
              padding: "2px 6px",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "4px",
            }}
          >
            {user.roles?.join(", ") || "Role"}
          </span>
        </div>
      </div>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        {t("my_Profile")}
      </Menu.Item>
      <Menu.Item key="subscription" icon={<CreditCardOutlined />}>
        {t("subscription")}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger onClick={logout}>
        {t("logout")}
      </Menu.Item>
    </Menu>
  );
};

export default ProfileMenu;