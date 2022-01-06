/* import "./assets/sass/main.scss" */
import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { AppBarComponent, Menu, Sidebar } from "./components";
import { BLOTTER, MAIN, ROUTES, TRADETICKET } from "./routes";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Blotter, Dashboard, Tradeticket } from "./features";

const App: React.FC = () => {

  const navigate = useNavigate();
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
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }, [themeMode]);

  const menuClickHandler = React.useCallback((link) => {
    navigate(link.path);
    setSidebarToggle(!sidebarToggle)
  }, [navigate, sidebarToggle]);

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
        children={<Menu links={ROUTES} menuClickHandler={menuClickHandler} />}
      />
      <Routes>
        <Route path={MAIN} element={<Dashboard />} />
        <Route path={BLOTTER} element={<Blotter />} />
        <Route path={TRADETICKET} element={<Tradeticket />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
