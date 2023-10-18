import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
//   import { Link, useNavigate } from "react-router-dom";

const digimonPic = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png",
  "/assets/5.png",
  "/assets/6.png",
];
const pages = ["צוות האתר", "משחקים", "אנימה", "סרטים", "מידע", "ראשי"];

const PAGES = [
  "aboutPage",
  "gamePage",
  "animePage",
  "moviePage",
  "detailsPage",
  "/",
];

export const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar className="cursor" sx={{ backgroundColor: "#EBC55A" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",

              height: 50,
            }}
          >
            {pages.map((page, i) => (
              <Box  sx={{ display: "flex" }}>
                <Link
                  to={PAGES[i]}
                  key={page}
                  style={{
                    marginTop: 12,
                    textDecorationLine: "none",
                    color: "white",
                    display: "block",
                    fontSize: 20,
                    fontFamily: "'Secular One', sans-serif",
                  }}
                >
                  {page}
                </Link>

                <img
                  src={digimonPic[i]}
                  alt={`digimon number ${i++}`}
                  style={{ height: "70px", width:'70px' }}
                />
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
