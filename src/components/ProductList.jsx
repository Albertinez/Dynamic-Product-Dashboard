import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No products in stock.</p>;
  }

  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
