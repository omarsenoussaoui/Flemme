import { Menu } from 'antd'
import React from 'react'
import { useTranslation } from "react-i18next";

function LanguageDropDown() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr"; // Set RTL/LTR
      };
  return (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage("en")}>
        English
      </Menu.Item>
      <Menu.Item key="ar" onClick={() => changeLanguage("ar")}>
        العربية
      </Menu.Item>
      <Menu.Item key="fr" onClick={() => changeLanguage("fr")}>
        Français
      </Menu.Item>
    </Menu>
  )
}

export default LanguageDropDown