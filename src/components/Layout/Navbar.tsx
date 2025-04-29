import { Dropdown, Button } from "antd";
import { UserOutlined, TranslationOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../context/AuthContext";
import ProfileMenu from "../Profile/ProfileMenu";
import LanguageDropDown from "../Language/LanguageDropDown";
import { useNavigate } from "react-router-dom"; // ⬅️ Import navigate hook

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate(); // ⬅️ Initialize navigate

  const handleLoginClick = () => {
    navigate("/login"); // ⬅️ Navigate to login
  };

  const handleRegisterClick = () => {
    navigate("/register"); // ⬅️ Navigate to register
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4 md:px-8 py-4 flex justify-between items-center">
      <div className="logo text-2xl font-bold text-primary-600">Flemme</div>

      <div className="header-actions flex items-center gap-3">
        {user ? (
          <>
            <Dropdown overlay={<LanguageDropDown />} placement="bottomRight">
              <Button
                icon={<TranslationOutlined />}
                className="flex items-center"
              >
                {t("language")}
              </Button>
            </Dropdown>
            <Dropdown
              overlay={<ProfileMenu />}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Button className="border-none bg-transparent">
                <UserOutlined className="text-xl text-blue-500" />
              </Button>
            </Dropdown>
          </>
        ) : (
          <>
            <button className="btn-text" onClick={handleLoginClick}>
              {t("login", "Connexion")}
            </button>
            <button className="btn-primary" onClick={handleRegisterClick}>
              {t("register", "S'inscrire")}
            </button>
            <Dropdown overlay={<LanguageDropDown />} placement="bottomRight">
              <Button
                icon={<TranslationOutlined />}
                className="flex items-center"
              >
                {t("language")}
              </Button>
            </Dropdown>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
