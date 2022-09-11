import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";
export default function Product(props) {
  let data = props.data;
  return (
    <div className="card border zCard">
      <div className="img-cont">
        <div
          className="img-holder"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundPosition: "50%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <div className="wrapper">
          <p className="card-text">{data.description}</p>
        </div>
        <div className="price mb-3">${data.price}</div>
        <Link to={`/products/${data.id}`} className="btn btn-danger">
          See Details
        </Link>
      </div>
    </div>
  );
}
