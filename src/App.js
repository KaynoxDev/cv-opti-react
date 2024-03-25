import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil/Accueil";
import Services from "./pages/services/Services";
import Realisations from "./pages/realisations/Realisations";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
