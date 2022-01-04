import "./assets/sass/main.scss"
import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  TextField
} from '@mui/material'
import { AppBarComponent } from "./components";

const App: React.FC = () => {

  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark");
  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  });
  const handleDrawerToggle = React.useCallback(() => {

  }, []);
  const onThemeChange = React.useCallback(() => {

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
      />
    </ThemeProvider>
  );
}

export default App;
