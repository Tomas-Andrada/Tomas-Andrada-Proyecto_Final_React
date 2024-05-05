import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { db } from '../services/firebase/firebaseconfig'; 
import { collection, getDocs } from 'firebase/firestore';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchItems = async () => {
      try {
        const collectionRef = collection(db, 'productos'); 
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const filteredItems = id ? data.filter(item => item.id_categoria === parseInt(id)) : data;
        setItems(filteredItems);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchItems();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <p>Cargando productos...</p>
        </div>
      ) : (
        <>
          <h2>Bienvenidos a la página</h2>
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};