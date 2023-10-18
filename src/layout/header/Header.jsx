import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{
            backgroundImage: `url("/assets/bgHeader.png")`,
            backgroundSize: `100%`,


          }}>
        <img
          style={{
            width: "100%",
            height: "200px",
            objectFit: "contain",
          }}
          component="img"
          src="/assets/digimonHeader.png"
          alt="broken robot" />
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "center" }}
              onClick={() => navigate("/")}
            >
              SeaData Test
            </Typography>
            <Link to={"/addUserPage"} className="link">
              Add new user
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
