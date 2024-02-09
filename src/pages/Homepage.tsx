import React from "react";
import Header from "../composant/Header";
import ScrollToTopButton from "../composant/ScrollToTopButton";
import ContainerMain from "../composant/ContainerMain";
import "aos/dist/aos.css";
import Footer from "../composant/Footer";
import "./Homepage.css";

const Homepage: React.FC = () => {
  return (
    <div className="App">
      <ContainerMain />
      <Header />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Homepage;
