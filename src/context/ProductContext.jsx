// hooks
import { createContext, useEffect, useState } from "react";

// services
import api from "../services/config";

// context
const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        alert(`${error.name}\n ${error.message}`);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
