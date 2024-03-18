import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const usePortfolios = () => {
  // Queries
  const getPortfolios = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/portfolios/`);
    return res.data;
  };

  const { data, isPending } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getPortfolios,
  });

  const computedBySharpeRatio = useMemo(() => {
    return data?.portfolios?.map((portfolio: Portfolio) => {
      // Higher value is good
      const sharpeRatioValue =
        (portfolio.returnRate - portfolio.riskRate) / portfolio.std;

      return {
        ...portfolio,
        riskToRewardValue: sharpeRatioValue,
        riskToRewardPercent: sharpeRatioValue * 100,
      };
    });
  }, [data]);

  return {
    isPending,
    portfolios: computedBySharpeRatio ?? [],
  };
};

export default usePortfolios;
