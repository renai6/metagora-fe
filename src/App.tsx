import { useContext } from "react";
import { ThemeProvider, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { Drawer } from "./components/Drawer";
import { AppBar } from "./components/AppBar";
import { GlobalContext } from "./contexts/GlobalContext";

import "./App.css";
import PortfolioContextProvider from "./contexts/PortfolioContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const drawerWidth = 240;

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <PortfolioContextProvider>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar />
          <Drawer />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <RouterProvider router={router} />
          </Box>
        </Box>
      </ThemeProvider>
    </PortfolioContextProvider>
  );
}

export default App;
