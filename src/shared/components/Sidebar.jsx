import { Link, useLocation } from "react-router";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  ContactsOutlined,
  DashboardOutlined,
  MessageOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { useLayoutStore } from "../../store/useThemeStore";
import { Logo } from "./Logo";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

export const Sidebar = () => {
  const location = useLocation();
  const { collapsed } = useLayoutStore();
  const { t } = useTranslation("common");

  const getSelectedKey = () => {
    switch (location.pathname) {
      case "/management/dashboard":
        return ["1"];
      case "/management/contacts":
        return ["2"];
      case "/management/conversations":
        return ["3"];
      case "/management/tasks":
        return ["4"];
      case "/management/analytics":
        return ["5"];
      default:
        return ["1"];
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
      <div className="demo-logo-vertical" />
      <Logo />
      <Menu
        mode="inline"
        defaultSelectedKeys={getSelectedKey()}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: <Link to="/management/dashboard">{t("dashboard")}</Link>,
          },
          {
            key: "2",
            icon: <ContactsOutlined />,
            label: <Link to="/management/contacts">{t("contacts")}</Link>,
          },
          {
            key: "3",
            icon: <MessageOutlined />,
            label: <Link to="/management/conversations">{t("conversations")}</Link>,
          },
          {
            key: "4",
            icon: <ScheduleOutlined />,
            label: <Link to="/management/tasks">{t("tasks")}</Link>,
          },
          {
            key: "5",
            icon: <BarChartOutlined />,
            label: <Link to="/management/analytics">{t("analytics")}</Link>,
          },
        ]}
      />
    </Sider>
  );
};
