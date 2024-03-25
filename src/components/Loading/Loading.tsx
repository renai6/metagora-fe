import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box mt={20} sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
