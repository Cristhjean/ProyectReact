import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular la llamada a la API o una promise que trae los productos
    const fetchProducts = async () => {
      const allProducts = [
        { id: 1, name: "Remera 1", category: "remeras" },
        { id: 2, name: "tasa 1", category: "tasas" },
        { id: 3, name: "cinta 1", category: "cintas" },
        // Otros productos
      ];
      const filteredProducts = categoryId
        ? allProducts.filter((product) => product.category === categoryId)
        : allProducts;
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [categoryId]);

  return <ItemList products={products} />;
};

export default ItemListContainer;