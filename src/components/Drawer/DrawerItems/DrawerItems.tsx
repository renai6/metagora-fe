import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import AppLogo from "../../../assets/applogo.svg";

const Menu = [
  {
    page: "Dashboard",
    Icon: () => <BarChartIcon />,
    path: "/",
  },
];

const DrawerItems = () => {
  const navigate = (path: string) => {
    return () => {
      window.location.replace(path);
    };
  };
  return (
    <div>
      <Toolbar sx={{ p: 2, justifyContent: "center" }}>
        <img src={AppLogo} height={80} width={80} />
      </Toolbar>
      <Divider />
      <List>
        {Menu.map((item) => (
          <ListItem key={item.page} disablePadding>
            <ListItemButton onClick={navigate(item.path)}>
              <ListItemIcon>
                <item.Icon />
              </ListItemIcon>
              <ListItemText primary={item.page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerItems;
