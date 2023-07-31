import React, { useState } from "react";
import "./Nav.css";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "./About";
import Search from "../Search";
import Contact from "../Contact";

function AllRoute() {
  return (
    <BRouter>
      <div className="rou">
    <Routes>
        <Route path="/"  exat component={Home} />
        <Route path="/About" exat component={About} />

        <Route path="/Search" exat component={Search} />

        <Route path="/Contact" exat component={Contact} />
        </Routes> 
      </div>
    </BRouter>
  );
}
export default AllRoute;
