import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <h1>לילה טוב</h1>
      <Footer />
    </>
  );
};


export default Layout;