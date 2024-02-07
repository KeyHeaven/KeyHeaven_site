import React from 'react';
import './Card3D.css';

const Card3D: React.FC = () => {
  return (
    <div className="container3d">
      <input type="checkbox" className="toggle" id="toggle" defaultChecked />
      <label className="toggle" htmlFor="toggle"> Animation</label>
      <div className="menu3d">
        <p className="middle">
        Profitez d'offres exclusives, de nombreuses réductions et bien plus encore parmi un choix de plus de 30 000 jeux, AAA ou indépendants.
        </p>
        <div className="bottom"></div>
        <div className="menu3d-back"></div>
        <div className="glass-reflection"></div>
      </div>
    </div>
  );
};

export default Card3D;
