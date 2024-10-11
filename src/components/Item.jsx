import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Item = ({ product }) => {
    const { addItemToCart } = useContext(CartContext); // Asegúrate de que estás importando el contexto

    const handleAddToCart = () => {
        addItemToCart(product); // Llama a la función para agregar el producto al carrito
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.detail}</p>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;