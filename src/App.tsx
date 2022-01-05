import "./assets/sass/main.scss"
import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField
} from '@mui/material'
import { AppBarComponent, Menu, Sidebar } from "./components";
import { ROUTES } from "./routes";

const App: React.FC = () => {

  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });
  const handleDrawerToggle = React.useCallback(() => {
    setSidebarToggle(!sidebarToggle)
  }, [sidebarToggle]);

  const onThemeChange = React.useCallback(() => {

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sidebarToggle}
      />
      <Sidebar
        isOpen={sidebarToggle}
        handleDrawerToggle={handleDrawerToggle}
        children={<Menu links={ROUTES} />}
      />
    </ThemeProvider>
  );
}

export default App;
