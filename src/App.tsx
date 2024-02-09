import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./composant/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  );
}
export default App;
