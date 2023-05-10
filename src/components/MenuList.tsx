// src/components/MenuList.tsx
import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const menu = [
  { id: 1, name: "Negima", price: 100 },
  { id: 2, name: "Tsukune", price: 120 },
  { id: 3, name: "Kawa", price: 130 },
];

const MenuList: React.FC = () => {
  return (
    <div>
      {menu.map((item) => (
        <Link to={`/menu/${item.id}`} key={item.id}>
          <MenuItem name={item.name} price={item.price} />
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
