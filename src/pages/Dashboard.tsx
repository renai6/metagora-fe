import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import RateGraph from "../components/Dashboard/RateGraph";
import PortfolioDataGraph from "../components/Dashboard/PortfolioDataGraph";
import RiskToRewardGraph from "../components/Dashboard/RiskToRewardGraph";
import Portfolios from "../components/Dashboard/Portfolios";

const Dashboard = () => {
  return (
    <>
      <Typography variant="h5" mb={2}>
        Dashboard
      </Typography>
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
    </>
  );
};

export default Dashboard;
