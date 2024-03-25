import { createContext } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type Prop = {
  children: React.ReactNode;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
export const PortfolioContext = createContext(null as any);

const PortfolioContextProvider = ({ children }: Prop) => {
  const getPortfolios = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolios/`);
    return res.data;
  };

  const { data, isPending, isLoading } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getPortfolios,
  });

  return (
    <PortfolioContext.Provider
      value={{
        isLoading,
        portfolios: isPending ? [] : data.portfolios,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
