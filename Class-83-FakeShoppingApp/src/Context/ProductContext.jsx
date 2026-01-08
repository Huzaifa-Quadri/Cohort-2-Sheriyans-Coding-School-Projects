import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/ProductApi";

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const data = await getProducts();
    // console.log("Fetched data:", data);
    setProducts(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    // console.log("Products state updated:", products);
  }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
