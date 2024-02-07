// Routes.tsx
import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom"; // Renommer Routes en RouterRoutes
import Homepage from "./Homepage";
import Conditions from "./Conditions";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes> {/* Utiliser RouterRoutes au lieu de Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/conditions" element={<Conditions />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
