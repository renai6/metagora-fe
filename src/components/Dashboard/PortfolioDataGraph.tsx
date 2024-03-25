import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Portfolio } from "../../types";

const PortfolioDataGraph = () => {
  const { portfolios } = useContext(PortfolioContext);
  const { graphColors } = useContext(GlobalContext);
  console.log(portfolios);
  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Portfolio Data</Typography>
        <Typography variant="subtitle2" mb={2}>
          Portfolio total values
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart width={200} height={200}>
            <Pie
              data={portfolios}
              dataKey="totalPortfolioValue"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#D9000b"
            >
              {portfolios.map((portfolio: Portfolio, index: number) => (
                <Cell
                  key={`cell-${index}-${portfolio.name}`}
                  fill={graphColors[index % graphColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default PortfolioDataGraph;
