import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductInDetails.css"
export default function ProductInDetails(props) {
  let data = props.data
  return (
    <div className='container'>
      <h4 className='d-title'>{data.title}</h4>
      <div className="d-img" style={{backgroundImage: `url(${data.image})`, backgroundPosition: "50%", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
      <p className='d-des'>{data.description}</p>
      <div className='priceCont'>

      <p className='price'>Price: <span>${data.price}</span></p>
      <Link to="/" className="btn btn-danger">Go Back</Link>
      </div>
    </div>
  )
}
