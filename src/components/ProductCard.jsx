import React from "react";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div
      className={`${styles.card} ${
        !product.inStock ? styles.outOfStock : ""
      }`}
    >
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>

      {!product.inStock && (
        <p className={styles.outText}>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductCard;
