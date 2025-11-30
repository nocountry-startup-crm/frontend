import { BrowserRouter } from "react-router";
import { AppRouter } from "./shared/routing/AppRouter";
import "./App.css";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { useLayoutStore } from "./store/useThemeStore";

function App() {
  const { isDark } = useLayoutStore();

  return (
    <StyleProvider layer>
      <ConfigProvider
        theme={{
          algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            ...(isDark ? {} : {}),
          },
        }}
      >
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ConfigProvider>
    </StyleProvider>
  );
}

export default App;
