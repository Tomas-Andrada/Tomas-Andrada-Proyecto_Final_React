import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export const Cart = () => {
  const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)
  const handleRemove = (id) => removeItem(id)
  const handleClear = () => clearCart();
  return (
    <div>
      {totalQuantity === 0 ? (
        <div>
          <h1>No hay items en el carrito</h1>
          <Link to='/' className='carta'>Productos</Link>
        </div>
      ) : (
        <>
          <h1>Productos</h1>
          <table className="cart-table">
             <thead>
                <tr>
                 <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio unitario</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((i) => (
                <tr key={i.id}>
                  <td>{i.nombre}</td>
                  <td>{i.quantity}</td>
                  <td>${i.precio}</td>
                  <td><button onClick={() => handleRemove(i.id)}>Eliminar</button></td>
                </tr>
                 ))}
            </tbody>
          </table>
          <button onClick={handleClear}>Eliminar Carrito</button>
          <h3>Total: ${total}</h3>
          <Link to='/checkout' >Checkout</Link>
        </>
      )}
    </div>
  );
};