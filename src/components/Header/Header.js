import React from "react";
import "./Header.css";
// import Navbar from "../Navbar/Navbar";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div className="header-container">
      {/* <Navbar /> */}
      <Nav />
      <Banner />
    </div>
  );
};

export default Header;
