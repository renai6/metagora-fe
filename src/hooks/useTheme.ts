import { PaletteMode } from "@mui/material";
import { Theme, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";

type ThemeProp = {
  theme: Theme;
  toggleMode: () => void;
};

const useTheme = (): ThemeProp => {
  const [mode, setMode] = useState<PaletteMode | undefined>("dark");

  const toggleMode = () => {
    setMode((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
      },
      typography: {
        fontSize: 12,
      },
    });
  }, [mode]);

  return { theme, toggleMode };
};

export default useTheme;
