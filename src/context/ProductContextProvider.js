import React, { createContext } from "react";
import axios from "axios";
import { useQuery } from "react-query";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    axios.get("https://fakestoreapi.com/products").then((res) => res.data)
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductContextProvider;
