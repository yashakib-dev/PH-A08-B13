import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [productsData, setProductsData] = useState([]);
  const data = {
    productsData,
    setProductsData,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsProvider;
