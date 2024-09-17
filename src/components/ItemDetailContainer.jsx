import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
    const fetchProduct = async () => {
    const allProducts = [
        { id: 1, name: "Remera 1", category: "remeras", detail: "Detalle Remera 1" },
        { id: 2, name: "tasa 1", category: "tasas", detail: "Detalle tasa 1" },
        { id: 3, name: "cinta 1", category: "cintas", detail: "Detalle cinta 1" },
    ];
    const foundProduct = allProducts.find((product) => product.id === parseInt(itemId));
    setProduct(foundProduct);
    };

    fetchProduct();
}, [itemId]);

if (!product) return <div>Cargando...</div>;

return (
    <div>
    <h2>{product.name}</h2>
    <p>{product.detail}</p>
    <button>Agregar al carrito</button>
    </div>
);
};

export default ItemDetailContainer;