import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import Services from "./pages/services/Services";
import Realisations from "./pages/realisations/Realisations";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
      </Routes>
    </div>
  );
}

export default App;
