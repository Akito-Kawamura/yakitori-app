// src/pages/MenuItemPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './MenuItemPage.css';

const menu = [
  {
    id: 1,
    name: 'Negima',
    price: 100,
    description: 'Chicken and leek skewer',
    imageUrl: '/images/yakitori_momo.png',
  },
  {
    id: 2,
    name: 'Tsukune',
    price: 120,
    description: 'Chicken meatball skewer',
    imageUrl: '',
  },
  {
    id: 3,
    name: 'Kawa',
    price: 130,
    description: 'Chicken skin skewer',
    imageUrl: '',
  },
];

const MenuItemPage: React.FC = () => {
  let { id } = useParams<{ id?: string }>();

  if (id === undefined) {
    return <div> Invalid ID.</div>;
  }

  const item = menu.find((item) => item.id === parseInt(id ? id : ''));

  if (!item) {
    return <div>Menu item not found.</div>;
  }

  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <h1 className="name">{item.name}</h1>
        <p className="price">{item.price} yen</p>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemPage;
