import { useMemo } from "react";
import { Portfolio } from "../types";

const usePortfolios = (portfolios: Portfolio[]) => {
  const computedBySharpeRatio = useMemo(() => {
    return portfolios?.map((portfolio: Portfolio) => {
      // Higher value is good
      const sharpeRatioValue =
        (portfolio.returnRate - portfolio.riskRate) / portfolio.std;

      return {
        ...portfolio,
        riskToRewardValue: sharpeRatioValue,
        riskToRewardPercent: sharpeRatioValue * 100,
      };
    });
  }, [portfolios]);

  return {
    computedBySharpeRatio,
  };
};

export default usePortfolios;
