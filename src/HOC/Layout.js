import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Test from "../Test.js";
const Layout = () => {
  return (
    <>
      <Header />
      {/* Test Component is for test reasons */}
      <Test />
      <Footer />
    </>
  );
};

export default Layout;
