import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  // Utilisez l'état local pour stocker l'heure actuelle
  const [currentTime, setCurrentTime] = useState(new Date());

  // Utilisez useEffect pour mettre à jour l'heure toutes les secondes
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Nettoyez le timer lors du démontage du composant
    return () => clearInterval(timerID);
  }, []);

  // Fonction pour formater l'heure
  const formatTime = (time: Date) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };

  return <div>{formatTime(currentTime)}</div>;
};

export default Clock;
