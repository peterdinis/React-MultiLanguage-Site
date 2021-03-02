import React, { useState, useEffect } from "react";
import "./Productspage.scss";
import { data } from "../data/backpacks";
import BackPack from "../interfaces/backpackinterface";

function Productspage() {
  const [products, setProducts] = useState<BackPack[]>([]);

  const loadProducts = async () => {
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="product__grid">
      {products.map((product) => {
        return (
          <div className='product'>
            <img className="product__image" src={product.image} />
            <h1 className="product__name">{product.name}</h1>
            <p className="product__info">{product.info}</p>
            <p className="product__price">{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Productspage;
