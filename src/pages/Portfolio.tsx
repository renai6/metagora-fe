import { Box, Grid, Typography } from "@mui/material";
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

import { Loading } from "../components/Loading";
import { PortfolioBonds, PortfolioStocks } from "../components/Portfolio";
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
    isPending,
  } = usePortfolio(name);

  return (
    <>
      <Typography variant="h5" mb={2}>
        Portfolio
      </Typography>
      {isPending ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
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
            xs={6}
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
            xs={6}
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
          <Grid
            item
            xs={6}
            lg={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
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
            <PortfolioStocks portfolio={portfolio} />
          </Grid>
          <Grid item xs={12}>
            <PortfolioBonds portfolio={portfolio} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Portfolio;
