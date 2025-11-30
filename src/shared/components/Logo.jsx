import { AppstoreOutlined } from "@ant-design/icons";
import { theme, Typography } from "antd";
import { useLayoutStore } from "../../store/useThemeStore";

const { Title } = Typography;

export const Logo = () => {
  const { collapsed } = useLayoutStore();
  const {
    token: { colorIcon },
  } = theme.useToken();

  return (
    <div className="flex items-center justify-center h-16">
      <AppstoreOutlined className={`text-[#1890ff] text-2xl ${collapsed ? "ml-7" : "ml-0"}`} />
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <Title level={3} className="m-0 p-0 ml-2 whitespace-nowrap" style={{ color: colorIcon }}>
          Startup CRM
        </Title>
      </div>
    </div>
  );
};
