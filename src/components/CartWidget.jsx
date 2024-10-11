import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <div style={{ fontSize: '18px' }}>
            <Link to="/cart">🛒 Cart ({getTotalItems()})</Link>
        </div>
    );
};

export default CartWidget;