import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  const products = [
    { id: 1, name: "Laptop", price: 1200, inStock: true },
    { id: 2, name: "Headphones", price: 150, inStock: false },
    { id: 3, name: "Keyboard", price: 90, inStock: true }
  ];

  const filteredProducts = showInStockOnly
    ? products.filter(product => product.inStock)
    : products;

  return (
    <>
      <h1>Product Dashboard</h1>

      <button onClick={() => setShowInStockOnly(!showInStockOnly)}>
        {showInStockOnly ? "Show All Products" : "Show In-Stock Only"}
      </button>

      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
