import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Importar para redirigir
import './Checkout.css';

const Checkout = () => {
    const { cartItems, getTotalAmount, clearCart } = useContext(CartContext); // Asegúrate de incluir clearCart
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Inicializar useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} es obligatorio.`;
            }
        });

        // Validar el número de teléfono (solo números)
        if (formData.phone && !/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'El número de teléfono solo puede contener dígitos.';
        }

        if (formData.email && !validateEmail(formData.email)) {
            newErrors.email = 'Por favor, introduce un correo electrónico válido.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        alert("Gracias por su compra <3");
        console.log("Datos de contacto:", formData);
        clearCart(); // Limpiar el carrito al confirmar compra
    };

    return (
        <div className="checkout">
            <h2>Finalizar Compra</h2>
            <div>
                <h3>Resumen de Compra</h3>
                {cartItems.map(item => (
                    <p key={item.id}>
                        {item.name} - Cantidad: {item.quantity} - Precio: ${item.price * item.quantity}
                    </p>
                ))}
                <p>Total a pagar: ${getTotalAmount()}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label>
                        Dirección:
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </label>
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div>
                    <label>
                        Teléfono:
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            pattern="\d*" 
                            maxLength="10" 
                        />
                    </label>
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div>
                    <label>
                        Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <button type="submit">Confirmar Compra</button>
                <button type="button" onClick={() => navigate('/')}>
    Seguir Comprando
</button>
            </form>
        </div>
    );
};

export default Checkout;