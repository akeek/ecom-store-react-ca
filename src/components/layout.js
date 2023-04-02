import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import '../App.css';

function Layout() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
