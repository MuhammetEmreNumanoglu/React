import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import About1 from "./About1.jsx";
import About2 from "./About2.jsx";

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to='employee'>Employee</Link>
      <Link to='company'>Company</Link>
      <Outlet/>
    </div>
  );
}

export default About;
