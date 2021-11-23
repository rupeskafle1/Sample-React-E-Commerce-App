import React from "react";
import Items from "../Item";
import Header from "../header/header";
import "../../index.css";
import Navbar from "../Navbar";

/* This components renders Products page */
const Products = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Navbar />
        <Items />
      </div>
    </>
  );
};

export default Products;
