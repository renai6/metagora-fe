import { useContext } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { formatNumberMoney } from "../../utils/format";
import { PortfolioContext } from "../../contexts/PortfolioContext";
import usePageNavigate from "../../hooks/usePageNavigate";

const Portfolios = () => {
  const navigate = usePageNavigate();
  const { portfolios } = useContext(PortfolioContext);

  return (
    <Box component="section">
      <Paper elevation={2} sx={{ p: 3, borderRadius: 8 }}>
        <Typography variant="h5">Portfolios</Typography>
        <List>
          {portfolios.map((portfolio: Portfolio, index: number) => (
            <div key={index}>
              <ListItem
                onClick={navigate(`/portfolio?name=${portfolio.name}`)}
                sx={{ cursor: "pointer" }}
                alignItems="center"
              >
                <ListItemText
                  primary={portfolio.name}
                  secondary={`Total Value: ${formatNumberMoney(
                    portfolio.totalPortfolioValue
                  )}`}
                />
              </ListItem>

              <Divider variant="middle" component="li" />
            </div>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Portfolios;
