import { createContext } from "react";
import useTheme from "../hooks/useTheme";
import useDrawer from "../hooks/useDrawer";

type Prop = {
  children: React.ReactNode;
};

export const GlobalContext = createContext(null as any);

const graphColors = ["#8f44ff", "#f05450", "#ffbe45", "#f635a7"];

const GlobalContextProvider = ({ children }: Prop) => {
  const { theme, toggleMode } = useTheme();
  const {
    mobileOpen,
    handleDrawerTransitionEnd,
    handleDrawerClose,
    handleDrawerToggle,
  } = useDrawer();

  return (
    <GlobalContext.Provider
      value={{
        theme,
        graphColors,
        toggleMode,
        mobileOpen,
        handleDrawerTransitionEnd,
        handleDrawerClose,
        handleDrawerToggle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
