import {
  Box
} from "@mui/material";
import React from "react";
import Logo from "./topNavbar/logo/Logo";
import Navbar from "./topNavbar/navbar/Navbar";

export const Header = () => {
  return (
    <>
      <Box sx={{
            backgroundImage: `url("/assets/bgHeader.png")`,
            backgroundSize: `100%`,
          }}>
    <Logo/>
    <Navbar/>
      </Box>
    </>
  );
};
export default Header;
