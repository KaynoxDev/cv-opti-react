import React, { useState, useEffect } from "react";

function Exemple() {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    // Met à jour l'état des fruits et des légumes après le premier rendu
    setFruits(["Apple", "Banana", "Cherry"]);
    setVegetables(["Carrot", "Potato", "Tomato"]);
  }, []); // Le tableau vide signifie que cet effet s'exécute une fois après le premier rendu du composant

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h1>Vegetables</h1>
      <ul>
        {vegetables.map((vegetable) => (
          <li key={vegetable}>{vegetable}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exemple;
