import React, { useContext } from "react";

// Components
import Product from "./shared/Product";

// Context
import { ProductsContext } from "../context/ProductContextProvider";

// Style
import styles from "./Store.module.css";

const Store = () => {
  const data = useContext(ProductsContext);

  return (
    <div className={styles.container}>
      {data.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
