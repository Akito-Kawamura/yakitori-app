// src/components/MenuItem.tsx
import React from 'react';

interface MenuItemProps {
  name: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price} yen</p>
    </div>
  );
};

export default MenuItem;
