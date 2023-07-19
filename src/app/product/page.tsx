"use client";

import { useProduct } from "@/context/ProductContext";
import React, { useEffect } from "react";

const Product = () => {
  const { products, setProducts } = useProduct();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <img width={"200px"} height={"300px"} src={item.image} alt={item.title}/>
          <p>Rating :- {item.rating.count} / {item.rating.rate} </p>
        </div>
      ))}
    </div>
  );
};

export default Product;
