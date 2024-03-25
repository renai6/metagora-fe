import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { Stock } from "../types";

const usePortfolio = (name: string | null) => {
  const getPortfolio = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/portfolios?name=${name}`
    );
    return res.data;
  };

  const { data, isPending } = useQuery({
    queryKey: ["portfolio"],
    queryFn: getPortfolio,
  });

  const totalStockValue = useMemo(() => {
    if (isPending) return 0;
    const total = data?.portfolio?.stocks.reduce(
      (accumulator: number, currentValue: Stock) =>
        currentValue.marketValue + accumulator,
      0
    );

    return total;
  }, [data, isPending]);

  const totalBondValue = useMemo(() => {
    if (isPending) return 0;
    const total = data?.portfolio?.bonds.reduce(
      (accumulator: number, currentValue: Stock) =>
        currentValue.marketValue + accumulator,
      0
    );

    return total;
  }, [data, isPending]);

  return {
    isPending,
    portfolio: isPending ? [] : data.portfolio,
    totalStockValue,
    totalBondValue,
    totalPortfolioValue: isPending ? 0 : data.portfolio.totalPortfolioValue,
    dividendIncome: isPending
      ? 0
      : data.portfolio.dividend_income.annualDividend_income,
  };
};

export default usePortfolio;
