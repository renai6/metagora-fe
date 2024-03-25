import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { DrawerItems } from "./DrawerItems";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

const drawerWidth = 240;
const DrawerComponent = () => {
  const { mobileOpen, handleDrawerTransitionEnd, handleDrawerClose } =
    useContext(GlobalContext);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <DrawerItems />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <DrawerItems />
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
