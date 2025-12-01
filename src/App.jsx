import { BrowserRouter } from "react-router";
import { AppRouter } from "./shared/routing/AppRouter";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { useLayoutStore } from "./store/useThemeStore";

import "./shared/utils/i18n";
import "./App.css";

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
