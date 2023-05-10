// src/pages/MenuItemPage.tsx
import React from "react";
import { useParams } from "react-router-dom";


const menu = [
  { id: 1, name: "Negima", price: 100, description: "Chicken and leek skewer" },
  { id: 2, name: "Tsukune", price: 120, description: "Chicken meatball skewer" },
  { id: 3, name: "Kawa", price: 130, description: "Chicken skin skewer" },
];

const MenuItemPage: React.FC = () => {
  let { id } =  useParams<{ id?: string } >();
  
  if (id===undefined) {
	return <div> Invalid ID.</div>;
  }

  const item = menu.find((item) => item.id === parseInt(id? id: ""));

  if (!item) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price} yen</p>
      <p>{item.description}</p>
    </div>
  );
};

export default MenuItemPage;
