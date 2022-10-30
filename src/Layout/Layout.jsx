import React from "react";
import Header from "../Shared/Navbar/Header";
import Footer from "../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
