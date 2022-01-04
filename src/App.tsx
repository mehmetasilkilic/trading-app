import "./assets/scss/main.scss"
import { useState } from "react";
import { createTheme } from "@mui/material"

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

  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
