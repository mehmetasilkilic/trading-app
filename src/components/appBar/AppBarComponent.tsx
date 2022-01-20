import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
    isDarkMode: boolean;
    isDrawerOpen: boolean;
}

export const AppBarComponent: React.FC<Props> = ({
    handleDrawerToggle,
    onThemeChange,
    isDarkMode,
    isDrawerOpen,
}): JSX.Element => {
    return (
        <div>
            <AppBar position="static" variant="elevation" className="appbar-wrapper">
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                        React Repo Trading App
                    </Typography>
                    <DarkModeIcon />
                    <ThemeSwitch size="small" onChange={onThemeChange} color="default" />
                    <LightModeIcon />
                </Toolbar>
            </AppBar>
        </div>
    )
}
