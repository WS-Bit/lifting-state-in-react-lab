// src/components/IngredientList.jsx
import React from 'react';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ color: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>Add ingredient</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList; 
