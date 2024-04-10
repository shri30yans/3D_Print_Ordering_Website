import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../db/data";
import Header from "../components/Header/Header";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  const [customInfo, setCustomInfo] = useState('');
  const [productStyle, setProductStyle] = useState('');


  const handleAddToCart = async () => {
    console.log(customInfo);
    const response = await fetch('http://localhost:8080/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId,
        custom_info: customInfo,
        product_style: productStyle,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error('Failed to place order');
    }
    alert('Order placed successfully!');
  };


  return (
    <div>
      <Header />
      <div className="image-side">
        <img src={product.img} alt={product.title} className="product-img" />
      </div>

      <div className="product-info">
          <h2>{product.title}</h2>
          <p>Product description goes here.</p>
          <p>
            Rating: {product.star} {product.star} {product.star} {product.star}
          </p>
          <p>Reviews: {product.reviews}</p>
          <p>Price: ${product.newPrice}</p>

          <input
            className = "custom-text" 
            type="text"
            value={customInfo}
            onChange={(e) => setCustomInfo(e.target.value)}
            placeholder="Enter custom info"
          />

          <select value={productStyle} className = "select-style" onChange={(e) => setProductStyle(e.target.value)}> 
            <option value="Style 1">Style 1</option>
            <option value="Style 2">Style 2</option>
            <option value="Style 3">Style 3</option>
          </select>

          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}>
            Add to Cart
          </button>
      </div>
    </div>
  );
};

export default ProductPage;