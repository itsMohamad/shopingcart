import React, { createContext } from "react";
import { useQuery } from "react-query";
// Api
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const { isLoading, error, data } = useQuery("products", getProducts);

  if (isLoading) return <div className="loader"></div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductContextProvider;
