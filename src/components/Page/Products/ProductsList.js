import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";
import "./Filter.css"
function ProductsList() {
  const API_LINK = "https://fakestoreapi.com/products";
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let getCategories = () => {
    fetch(`${API_LINK}/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  let getProducts = () => {
    fetch(API_LINK)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  let filerHandler = (cat) => {
    fetch(`${API_LINK}/category/${cat}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  let product = products.map((product) => (
    <Product data={product} key={product.id} />
  ));
  let btns = document.querySelectorAll(".list-group-item");

  const addActive = (e) => {
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div className="container">
      {products.length === 0 && (
        <div
          className="spinner-border text-danger position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <h2 className="text-center p-3 text-dark">Our ProductsList</h2>
      <div className="filter">
        <ul className="list-group">
          <button
            className="list-group-item active"
            key="all"
            onClick={(e) => {
              addActive(e);
              getProducts();
            }}
          >
            cancel
          </button>
          {categories.map((category) => {
            return (
              <button
                className="list-group-item"
                key={category}
                onClick={(e) => {
                  addActive(e);
                  filerHandler(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </ul>
      </div>
      <div className="zGrid">{product}</div>
    </div>
  );
}

export default ProductsList;
