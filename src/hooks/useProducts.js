import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';

const useProducts = (categoryId) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsRef = collection(db, 'item');
                // Consulta de productos según categoryId
                const q = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef;
                const querySnapshot = await getDocs(q);
                const productList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(productList);
            } catch (err) {
                // Manejo de errores
                setError('Error al cargar los productos: ' + err.message);
            } finally {
                setLoading(false); // Asegúrate de cambiar el estado de loading al final
            }
        };

        fetchProducts();
    }, [categoryId]);

    return { products, loading, error }; // Devuelve el estado de los productos
};

export default useProducts;