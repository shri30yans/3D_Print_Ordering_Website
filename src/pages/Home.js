// HomePage.js
import React, { useState } from "react";
import products from "../db/data";
import Products from "../components/Products/Products";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import "../index.css";

function HomePage() {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ id, category, color, newPrice, title }) =>
          category === selected ||
          id === selected ||
          color === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Header />
      <Sidebar handleInputChange = {handleInputChange} handleChange={handleChange} query={query}/>
      <Products result ={result}/>
    </>
  );
}

export default HomePage;
