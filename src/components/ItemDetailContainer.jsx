import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../services/firebase"; 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Custom Hook para obtener el producto
const useFetchProduct = (itemId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!itemId) {
                    setError("El ID del producto no es válido.");
                    return;
                }

                const productRef = doc(db, "products", itemId);
                const productSnap = await getDoc(productRef);

                if (productSnap.exists()) {
                    setProduct(productSnap.data());
                } else {
                    setError("No existe el producto.");
                }
            } catch (err) {
                console.error("Error al obtener el producto:", err);
                setError("Error al obtener el producto. Por favor, intenta nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [itemId]);

    return { product, loading, error };
};

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const { product, loading, error } = useFetchProduct(itemId);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    if (!product) return <div>No se encontró información del producto.</div>;

    const { name, detail } = product; 

    return (
        <div className="container mt-4">
            <h2>{name}</h2>
            <p>{detail}</p>
            <button className="btn btn-primary">Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;