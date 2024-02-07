// Header.tsx
import React from "react";
import "./Header.css";
import Card3D from "./Card3D";
import Clock from "./Clock";

const Header: React.FC = () => {



  return (
    <header className="header">
      <div className="image-container">
        <video src="black.mp4" autoPlay loop muted></video>
        <h1>Des nouveautés chaques semaines</h1>
       <p><Clock/></p>
      </div>
      <div className="big_container">
        <div className="mini_img_container">
          <p>KeyHeaven™</p>
          <p className="bigtext">
            Bienvenue dans l'univers de KeyHeaven, votre destination ultime pour
            découvrir, acquérir et jouer à une vaste gamme de jeux passionnants.
            En tant que plateforme incontournable, KeyHeaven offre un accès
            facile à une bibliothèque de plus de 30 000 jeux, comprenant à la
            fois des titres AAA et des joyaux indépendants. Explorez des mondes
            infinis, affrontez des défis épiques et vivez des aventures
            captivantes, le tout à portée de clic. Notre interface intuitive
            vous permet de naviguer aisément parmi les différents genres, de
            trouver vos jeux préférés et de découvrir de nouvelles perles.
            Profitez d'offres exclusives, de réductions attrayantes et de mises
            à jour régulières qui enrichissent continuellement votre expérience
            de jeu. Avec KeyHeaven, le divertissement est à portée de main, que
            ce soit sur votre PC, votre console ou votre appareil mobile.
            Rejoignez dès maintenant notre communauté dynamique de joueurs
            passionnés et plongez dans un univers de divertissement sans limites
            avec KeyHeaven.
          </p>
        </div>
        <div className="container">
          <Card3D />
          <p className="textheader">
            Profitez d'offres exclusives, de nombreuses réductions et bien plus
            encore parmi un choix de plus de 30 000 jeux, AAA ou indépendants.
          </p>
        </div>
        <div className="mini_img_container">
          <p>
            Emportez KeyHeaven™ partout avec vous grace à l'application mobile.
          </p>
          <img src="homepage.png" alt="phone" className="phone" />
        </div>
      </div>
    </header>
  );
};

export default Header;
