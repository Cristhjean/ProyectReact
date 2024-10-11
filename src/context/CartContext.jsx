import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Intenta cargar los ítems del carrito desde el local storage al inicio
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        // Guarda el carrito en local storage cada vez que cambie
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item => 
                    item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeItemFromCart = (id, removeAll = false) => {
    setCartItems((prevItems) => {
        if (removeAll) {
            return prevItems.filter(item => item.id !== id); // Eliminar todos los ítems de este producto
        }
        return prevItems.map(item => 
            item.id === id 
            ? { ...item, quantity: item.quantity - 1 } // Reducir la cantidad en uno
            : item
        ).filter(item => item.quantity > 0); // Eliminar el ítem si la cantidad es cero
    });
};

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems'); // Opcional: eliminar del local storage
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Nueva función para calcular el monto total
    const getTotalAmount = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addItemToCart, 
            removeItemFromCart, 
            clearCart, 
            getTotalItems, 
            getTotalAmount // Asegúrate de incluir esta línea
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;