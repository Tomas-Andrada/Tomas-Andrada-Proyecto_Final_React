import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <Link to={`/item/${item.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};