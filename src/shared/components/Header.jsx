import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useLayoutStore } from "../../store/useThemeStore";
import { LanguageSwitcher } from "./LanguageSwitcher";

const { Header: HeaderAnt } = Layout;

export const Header = () => {
  const { isDark, toggleTheme, collapsed, toggleCollapse } = useLayoutStore();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <HeaderAnt style={{ background: colorBgContainer, padding: 0 }} className="flex justify-between items-center">
      <Button
        type="text"
        icon={
          collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: "20px" }} />
          )
        }
        onClick={toggleCollapse}
      />
      <LanguageSwitcher />
      <Button
        className="mr-6"
        type="text"
        icon={isDark ? <SunOutlined style={{ fontSize: "20px" }} /> : <MoonOutlined style={{ fontSize: "20px" }} />}
        onClick={toggleTheme}
      />
    </HeaderAnt>
  );
};
