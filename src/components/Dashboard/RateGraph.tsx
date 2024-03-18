import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  LineChart,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  XAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { PortfolioContext } from "../../contexts/PortfolioContext";

const RateGraph = () => {
  const { portfolios } = useContext(PortfolioContext);

  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Risk rate VS STD VS Return Rate</Typography>
        <Typography variant="subtitle2" mb={2}>
          Risk Rate, return rate, and std per portfolio
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={portfolios}>
            <Tooltip />
            <YAxis type="number" padding={{ top: 30 }} />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="riskRate"
              name="Portfolio Data"
              strokeWidth={2}
              stroke="#ffbe45"
            />
            <Line
              type="monotone"
              dataKey="std"
              name="Portfolio Data"
              strokeWidth={2}
              stroke="#f05450"
            />
            <Line
              type="monotone"
              dataKey="returnRate"
              name="Portfolio Data"
              strokeWidth={2}
              stroke="#8f44ff"
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default RateGraph;
