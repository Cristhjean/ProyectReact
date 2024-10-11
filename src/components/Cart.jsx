import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import Checkout from './Checkout';

const Cart = () => {
    const { cartItems, removeItemFromCart, clearCart, getTotalItems, getTotalAmount } = useContext(CartContext);
    const [showCheckout, setShowCheckout] = useState(false);

    if (cartItems.length === 0) {
        return <h2>El carrito está vacío</h2>; 
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <p>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}</p>
                    <div>
                        <button onClick={() => removeItemFromCart(item.id)}>Eliminar Uno</button>
                        <button onClick={() => removeItemFromCart(item.id, true)}>Eliminar Todos</button>
                    </div>
                </div>
            ))}
            <button onClick={clearCart} style={{ marginTop: '10px' }}>Limpiar Carrito</button>
            <p>Total de artículos: {getTotalItems()}</p>
            <p>Total a pagar: ${getTotalAmount()}</p>
            <button onClick={() => setShowCheckout(true)}>Finalizar Compra</button>

            {showCheckout && (
                <Checkout cartItems={cartItems} onClose={() => setShowCheckout(false)} />
            )}
        </div>
    );
};

export default Cart;