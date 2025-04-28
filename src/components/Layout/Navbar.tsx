import { Dropdown, Button, Image } from "antd";
import { UserOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { ASSETS } from "../../assets/assets";
import ProfileMenu from "../Profile/ProfileMenu";
import LanguageDropDown from "../Language/LanguageDropDown";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={ASSETS.LOGO} alt="App Logo" width={200} preview={false} />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Dropdown overlay={<LanguageDropDown />} placement="bottomRight">
          <Button icon={<TranslationOutlined />}>{t("language")}</Button>
        </Dropdown>

        {user && (
          <Dropdown
            overlay={<ProfileMenu />}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button style={{ border: "none", background: "transparent" }}>
              <UserOutlined style={{ fontSize: "20px", color: "#1890ff" }} />
            </Button>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Navbar;
