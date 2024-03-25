export type Portfolio = {
  stocks: Stock[];
  bonds: Bond[];
  dividendIncome: DividendIncome;
  name: string;
  totalPortfolioValue: number;
  returnRate: number;
  riskRate: number;
  std: number;
};

export type Stock = {
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
  marketValue: number;
  profitLoss: number;
};

export type Bond = {
  name: string;
  quantity: number;
  faceValue: number;
  purchasePrice: number;
  currentPrice: number;
  marketValue: number;
  profitLoss: number;
};

export type DividendIncome = {
  annualDividendYield: number;
  annualDividendIncome: number;
};
