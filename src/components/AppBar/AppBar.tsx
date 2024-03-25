import { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

import { GlobalContext } from "../../contexts/GlobalContext";

const drawerWidth = 240;

const AppBarComponent = () => {
  const { theme, toggleMode, handleDrawerToggle } = useContext(GlobalContext);

  return (
    <AppBar
      elevation={0}
      color="transparent"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="subtitle1" noWrap component="div">
          {dayjs().format("DD MMMM YYYY")}
        </Typography>
        <IconButton onClick={toggleMode} color="inherit" sx={{ ml: "auto" }}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
