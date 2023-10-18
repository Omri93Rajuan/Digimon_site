import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Paper sx={{ backgroundColor: "#7A6D87" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", color: "white" }}
        >
          Created by Omri Rajuan
        </Typography>
      </Paper>
    </>
  );
};

export default Footer;
