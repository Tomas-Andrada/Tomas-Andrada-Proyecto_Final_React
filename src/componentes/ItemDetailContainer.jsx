import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { db } from '../services/firebase/firebaseconfig'; 
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('No existe ningún documento con el ID proporcionado');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error) ;
      }
    };
    
    if (id) {
      fetchItem();
    } else {
      setItem(null);
    }
  }, [id]);

  return (
    <div className="item-detail-container">
      {item && <ItemDetail 
                 id={item.id} 
                 nombre={item.nombre} 
                 imagen={item.imagen} 
                 descripcion={item.descripcion} 
                 precio={item.precio} 
                 stock={item.stock} 
              />}
    </div>
  );
};