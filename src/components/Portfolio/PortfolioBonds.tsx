import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import {
  LineChart,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  XAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { Portfolio } from "../../types";
import { GlobalContext } from "../../contexts/GlobalContext";

type Props = {
  portfolio: Portfolio;
};

const PortfolioBonds = ({ portfolio }: Props) => {
  const { graphColors } = useContext(GlobalContext);

  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Portfolio Bonds</Typography>
        <Typography variant="subtitle2" mb={2}>
          Market value VS Profit loss
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart width={500} height={200} data={portfolio.bonds || []}>
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

export default PortfolioBonds;
