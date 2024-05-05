import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { agregarOrden } from './firebaseHelpers';
import { serverTimestamp } from 'firebase/firestore';

export const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    dni: ''
  });
  const { total } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null); // Estado para almacenar la ID de la orden
  const [orderCompleted, setOrderCompleted] = useState(false); // Estado para controlar si se ha completado la orden

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const order = {
        buyer: {
          nombre: formData.nombre,
          email: formData.email,
          dni: formData.dni
        },
        total, 
        items: cart, 
        date: serverTimestamp()  
      };
      const id = await agregarOrden(order); 
      setOrderId(id);
      clearCart(); 
      setOrderCompleted(true); 
    } catch (error) {
      console.error('Error al agregar la orden:', error);
    }
  };

  return (
    <div>
      {!orderCompleted ? (
        <div>
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              DNI:
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Confirmar orden</button>
          </form>
          <Link to="/cart">Volver al carrito</Link>
        </div>
      ) : (
        <div>
          <p>La orden se agregó correctamente. ID de la orden: {orderId}</p>
          <Link to="/cart">Volver al carrito</Link>
        </div>
      )}
    </div>
  );
};