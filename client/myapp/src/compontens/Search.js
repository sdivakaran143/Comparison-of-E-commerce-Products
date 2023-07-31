import React, { useState } from "react";
import "./Nav.css";
import {BrowserRouter as BRouter,Switch,Route} from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import Contact from "./Contact";

function Nav() {
  return (
    <>
      <nav >
        <h2>E-COM PRODUCT COMPARE</h2>
        <ul className="nav-li">
          <li>HOME</li>
          <li>SEARCH</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
