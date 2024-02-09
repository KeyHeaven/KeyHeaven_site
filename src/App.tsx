import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./composant/Navbar";
import Footer from "./composant/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  );
}
export default App;
