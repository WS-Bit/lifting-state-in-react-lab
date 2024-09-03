// src/components/BurgerStack.jsx
import React from 'react';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ color: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(ingredient.name)}>Remove ingredient</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
