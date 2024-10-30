import React, { useState, useEffect } from 'react';
import Product from './CardProduct';
import Products from './Product.json';
export default function home() {

  // useEffect(()=>{
  //   setProducts(Products);
  //   console.log(products);

  // },[]);
  return (
    <div className='container p-2'>
        <h2 className='text-center'>E-Commerce</h2>
        <span className='d-flex justify-content-end'>
        <i className="fa-sharp-duotone fa-solid fa-cart-shopping m-3 " style={{'fontSize': '25px', 'cursor': 'pointer'}}></i>
        </span>
        <div className='d-flex justify-content-between flex-wrap items'>
          {
            Products.map((element)=>{
              return <Product name={element.name} description={element.description} discount_percentage = {element.discount_percentage} price={element.price}/>
            })
          }
        </div>
    </div>
  )
}
