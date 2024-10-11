import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext"; // Asegúrate de importar CartProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <CartProvider> {/* Asegúrate de envolver la aplicación con CartProvider */}
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;