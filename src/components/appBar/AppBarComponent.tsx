import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
}

export const AppBarComponent: React.FC<Props> = ({
    handleDrawerToggle,
    onThemeChange
}): JSX.Element => {
    return (
        <div>
            <AppBar position="static" variant="elevation">
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                        edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="subtitle1" component="div">
                        React Repo Trading App
                    </Typography>
                    <ThemeSwitch size="small" onChange={onThemeChange} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
