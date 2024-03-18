import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PortfolioContext } from "../../contexts/PortfolioContext";

const RiskToRewardGraph = () => {
  const { portfolios } = useContext(PortfolioContext);
  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Risk to reward (Sharpe Ratio)</Typography>
        <Typography variant="subtitle2" mb={2}>
          Risk to reward value per portolio
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={portfolios}>
            <Tooltip />
            <YAxis type="number" padding={{ top: 30 }} />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="riskToRewardValue"
              name="Portfolio Data"
              strokeWidth={2}
              stroke="#f636a7"
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default RiskToRewardGraph;
