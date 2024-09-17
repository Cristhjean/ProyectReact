import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta principal: catálogo de productos */}
        <Route path="/" element={<ItemListContainer />} />
        
        {/* Ruta para productos filtrados por categoría */}
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        {/* Ruta para el detalle de un producto */}
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;