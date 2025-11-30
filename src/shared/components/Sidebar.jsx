import { Link } from "react-router";
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

const { Sider } = Layout;

export const Sidebar = () => {
  const { collapsed } = useLayoutStore();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
      <div className="demo-logo-vertical" />
      <Logo />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <DashboardOutlined />,
            label: <Link to="/management/dashboard">Dashboard</Link>,
          },
          {
            key: "2",
            icon: <ContactsOutlined />,
            label: <Link to="/management/contacts">Contacts</Link>,
          },
          {
            key: "3",
            icon: <MessageOutlined />,
            label: <Link to="/management/conversations">Conversations</Link>,
          },
          {
            key: "4",
            icon: <ScheduleOutlined />,
            label: <Link to="/management/tasks">Tasks</Link>,
          },
          {
            key: "5",
            icon: <BarChartOutlined />,
            label: <Link to="/management/analytics">Analytics</Link>,
          },
        ]}
      />
    </Sider>
  );
};
