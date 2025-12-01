import { Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const items = [
    {
      label: "Español (ES)",
      key: "es",
    },
    {
      label: "English (EN)",
      key: "en",
    },
  ];
  const menuProps = {
    items,
    onClick: (e) => {
      i18n.changeLanguage(e.key);
    },
  };

  const currentLanguage = i18n.language === "en" ? "EN" : "ES";

  return (
    <Dropdown menu={menuProps} trigger={["click"]}>
      <Button
        icon={<GlobalOutlined />}
        shape="round"
        size="large"
        style={{ border: "none", background: "transparent" }}
      >
        {currentLanguage}
      </Button>
    </Dropdown>
  );
};
