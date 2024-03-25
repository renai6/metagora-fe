import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Portfolio } from "../../types";

type Props = {
  portfolio: Portfolio;
};

const PortfolioStocks = ({ portfolio }: Props) => {
  const { graphColors } = useContext(GlobalContext);
  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Portfolio Stocks</Typography>
        <Typography variant="subtitle2" mb={2}>
          Market value VS Profit loss
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={portfolio.stocks || []}>
            <Tooltip />
            <YAxis type="number" padding={{ top: 30 }} />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="marketValue"
              name="Market Value"
              strokeWidth={2}
              stroke={graphColors[1]}
            />
            <Line
              type="monotone"
              dataKey="profitLoss"
              name="Profit Loss"
              strokeWidth={2}
              stroke={graphColors[2]}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default PortfolioStocks;
