import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const getProducts = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, 'item');
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
};