import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { UserInfoProfile } from "../../Models/Profile";
import ProfileService from "../../services/profileService";

const { Sider } = Layout;

const Sidebar = () => {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState<UserInfoProfile | null>(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await ProfileService.getUserInfo();
        setUserInfo(userData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  });
  return (
    <Sider width={260} style={{ background: "#f8f9fa", padding: "10px" }}>
      <div
        style={{
          padding: "10px",
          marginBottom: "10px",
          background: "white",
          borderRadius: "5px",
        }}
      >
        <Button type="text" icon={<UserOutlined />}>
          {userInfo?.firstName } {userInfo?.lastName }
        </Button>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ background: "transparent" }}
      >
        <Menu.Item key="13" icon={<SettingOutlined />}>
          {t("settings")}
        </Menu.Item>
        <Menu.Item key="14" icon={<SettingOutlined />}>
          {t("settings")}
        </Menu.Item>
        <Menu.Item key="15" icon={<SettingOutlined />}>
          {t("settings")}
        </Menu.Item>
      </Menu>

      {/* <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Button type="primary" icon={<RocketOutlined />} style={{ width: "100%" }}>
          S'abonner maintenant
        </Button>
      </div>

      <div style={{ textAlign: "center", marginBottom: "24px", marginTop: "20px" }}>
        <Image src={ASSETS.LOGO} alt="App Logo" width={150} preview={false} />
      </div> */}
    </Sider>
  );
};

export default Sidebar;
