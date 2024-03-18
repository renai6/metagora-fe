import { Box, Grid, Paper, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LinkIcon from "@mui/icons-material/Link";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useSearchParams } from "react-router-dom";
import usePortfolio from "../hooks/usePortfolio";
import { formatNumberMoney } from "../utils/format";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const Portfolio = () => {
  const { graphColors } = useContext(GlobalContext);

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const {
    portfolio,
    totalStockValue,
    totalPortfolioValue,
    totalBondValue,
    dividendIncome,
  } = usePortfolio(name);

  return (
    <>
      <Typography variant="h5" mb={2}>
        Portfolio
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: graphColors[0], height: 80, width: 80 }}>
              <LinkIcon />
            </Avatar>
            <Box ml={2}>
              <Typography variant="h6">Portfolio</Typography>
              <Typography variant="subtitle1">
                {formatNumberMoney(totalPortfolioValue)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: graphColors[2], height: 80, width: 80 }}>
              <PaidIcon />
            </Avatar>
            <Box ml={2}>
              <Typography variant="h6">Bonds</Typography>
              <Typography variant="subtitle1">
                {formatNumberMoney(totalBondValue)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: graphColors[1], height: 80, width: 80 }}>
              <ShowChartIcon />
            </Avatar>
            <Box ml={2}>
              <Typography variant="h6">Dividend</Typography>
              <Typography variant="subtitle1">
                {formatNumberMoney(dividendIncome)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: graphColors[3], height: 80, width: 80 }}>
              <BarChartIcon />
            </Avatar>
            <Box ml={2}>
              <Typography variant="h6">Stocks</Typography>
              <Typography variant="subtitle1">
                {formatNumberMoney(totalStockValue)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box component="section">
            <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
              <Typography variant="h5">Portfolio Stocks</Typography>
              <Typography variant="subtitle2" mb={2}>
                Market value VS Profit loss
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  width={500}
                  height={200}
                  data={portfolio.stocks || []}
                >
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
        </Grid>
        <Grid item xs={12}>
          <Box component="section">
            <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
              <Typography variant="h5">Portfolio Bonds</Typography>
              <Typography variant="subtitle2" mb={2}>
                Market value VS Profit loss
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  width={500}
                  height={200}
                  data={portfolio.bonds || []}
                >
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
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
