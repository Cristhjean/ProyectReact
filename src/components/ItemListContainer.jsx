import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const { products, loading, error } = useProducts(categoryId);

    if (loading) return <div>Cargando productos...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-4">
            <h2>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
            <div className="row">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;