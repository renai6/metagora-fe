import { createContext } from "react";
import usePortfolios from "../hooks/usePortfolios";

type Prop = {
  children: React.ReactNode;
};

export const PortfolioContext = createContext(null as any);

const PortfolioContextProvider = ({ children }: Prop) => {
  const { portfolios } = usePortfolios();

  return (
    <PortfolioContext.Provider
      value={{
        portfolios,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
