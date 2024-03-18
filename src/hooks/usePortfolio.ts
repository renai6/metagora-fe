import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";

const usePortfolio = (name: string | null) => {
  const getPortfolio = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/portfolios?name=${name}`
    );
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["portfolio"],
    queryFn: getPortfolio,
  });

  const totalStockValue = useMemo(() => {
    const total = data?.portfolio?.stocks.reduce(
      (accumulator: number, currentValue: Stock) =>
        currentValue.marketValue + accumulator,
      0
    );

    return total;
  }, [data]);

  const totalBondValue = useMemo(() => {
    const total = data?.portfolio?.bonds.reduce(
      (accumulator: number, currentValue: Stock) =>
        currentValue.marketValue + accumulator,
      0
    );

    return total;
  }, [data]);

  return {
    portfolio: data?.portfolio ?? { stocks: [] },
    totalStockValue,
    totalBondValue,
    totalPortfolioValue: data?.portfolio.totalPortfolioValue,
    dividendIncome: data?.portfolio.dividend_income.annualDividend_income,
  };
};

export default usePortfolio;
