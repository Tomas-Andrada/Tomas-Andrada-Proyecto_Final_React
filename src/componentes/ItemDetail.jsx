import React, { useContext, useState } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, nombre, imagen, descripcion, precio, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id, nombre, precio
    };
    addItem(item, quantity);
  };

  return (
    <div className="item-detail">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Stock {stock}</p>
      <p>Precio: ${precio}</p>
      
      {
        quantityAdded > 0 ? (
          <>
          <Link to='/cart' className='carta'> Terminar compra</Link>
          <br></br>
          <Link to='/'> Seguir comprando </Link>
          </>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )
      }
    </div>
  );
};