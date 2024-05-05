import { db } from '../services/firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export const agregarOrden = async (order) => {
  try {
    const ordersCollectionRef = collection(db, 'orders');
    const docRef = await addDoc(ordersCollectionRef, order);
    return docRef.id; 
  } catch (error) {
    console.error('Error al agregar la orden:', error);
    throw error; 
  }
};