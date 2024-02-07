import React, { useEffect, useState } from "react";
import "./ContainerMain.css";
import Button from "./Button";

const ContainerMain: React.FC = () => {
  const [countAccount, setCount] = useState(10000);
  const [countKeys, setCountK] = useState(8000);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountK((prevCount) => prevCount + 3);
    }, 8000); // 8 secondes

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 4);
    }, 10000); // 10 secondes

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="text-container">
        <div className="title">
          <img src="keylogo.png"  alt="KeyHeaven" />
          <h2>KeyHeaven™</h2>
        </div>

        <p>
          KeyHeaven™ est la plateforme idéal pour acheter vos clés CD à des prix
          compétitifs.
        </p>
        <div className="title">
          <div className="subtitlecont">
            <div className="subcircle">
              <p>clé vendu</p> <div className="circle blue blink"></div>
            </div>
            <div className="counter">
              <p>{countKeys}</p>
            </div>
          </div>

          <div className="subtitlecont">
            <div className="subcircle">
              <p>Compte en ligne</p> <div className="circle green blink"></div>
            </div>
            <div className="counter">
              <p>{countAccount}</p>
            </div>
          </div>
        </div>
        <Button
          onClick={() => alert("Redirection sur le store en ligne.")}
          label="Voir l'application"
        />
        <div className="Credit_container">
          
          <p className="subsubtitle">Disponible sur :</p>
          <a
            href="lien_vers_apple_store"
            onClick={() => alert("Redirection sur l'Apple store")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png" alt="Apple store"  />
          </a>
          <a
            href="lien_vers_google_store"
            onClick={() => alert("Google store")}>
            <img src="https://freelogopng.com/images/all_img/1664285914google-play-logo-png.png" alt="Redirection sur le Google store" />
          </a>
        </div>
      </div>
      <div className="image-container">
        <video src="cyber.mp4" autoPlay loop muted></video>
        <h1>Vaste choix des meilleurs jeux au meilleur prix !</h1>
      </div>
    </div>
  );
};

export default ContainerMain;
