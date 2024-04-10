// Products.js
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import Card from "./Card";

const Products = ({ result }) => {
  console.log("Product", result);
  return (
    <>
      <section className="card-container">
        {result.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (
          <Link key={id} to={`/product/${id}`}>
            <Card
              img={img}
              title={title}
              star={star}
              reviews={reviews}
              prevPrice={prevPrice}
              newPrice={newPrice}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default Products;
