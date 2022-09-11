import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInDetails from "./ProductInDetails";

function ProductsDetails() {
  let [product, setProduct] = useState([]);
  let parms = useParams();
  let API_LINK = `https://fakestoreapi.com/products/${parms.id}`;

  useEffect(() => {
    fetch(API_LINK)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div>
      {product.length === 0 ? (
        <div
          className="spinner-border text-danger position-absolute top-50 start-50"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ):
      
      <ProductInDetails data={product} />
      }
    </div>
  );
}

export default ProductsDetails;
