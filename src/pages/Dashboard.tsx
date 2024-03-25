import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import RateGraph from "../components/Dashboard/RateGraph";
import PortfolioDataGraph from "../components/Dashboard/PortfolioDataGraph";
import RiskToRewardGraph from "../components/Dashboard/RiskToRewardGraph";
import Portfolios from "../components/Dashboard/Portfolios";
import { useContext } from "react";
import { PortfolioContext } from "../contexts/PortfolioContext";
import { Loading } from "../components/Loading";

const Dashboard = () => {
  const { isLoading } = useContext(PortfolioContext);

  return (
    <>
      <Typography variant="h5" mb={2}>
        Dashboard
      </Typography>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <RiskToRewardGraph />
          </Grid>
          <Grid item xs={12} lg={4}>
            <PortfolioDataGraph />
          </Grid>
          <Grid item xs={12}>
            <RateGraph />
          </Grid>
          <Grid item xs={12}>
            <Portfolios />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Dashboard;
