import React, { useState, useEffect } from 'react';
import Product from './CardProduct';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Products from './Product.json';


export default function Home() {
  const itemList = useSelector((state)=>state.shops.Item)
  // useEffect(()=>{
  //   setProducts(Products);
  //   console.log(products);

  // },[]); 
  console.log('itemList');
  console.log(itemList);


  return (
    <div className='container p-2'>
        <h2 className='text-center'>E-Commerce</h2>
        <div>
          <span className='d-flex justify-content-between'>
            <Link className='btn btn-outline-primary btn-sm' to='/E-commerce/admin' style={{'height': 'fit-content'}}>Admin Cantrol</Link>
            <i className="fa-sharp-duotone fa-solid fa-cart-shopping m-3 " style={{'fontSize': '25px', 'cursor': 'pointer'}}></i>
          </span>
        </div>
        <div className='d-flex justify-content-between flex-wrap items'>
          {
            Products.map((element)=>{
              return <Product name={element.name} description={element.description} discount = {element.discount_percentage} price={element.price}/>
            })
          }

        </div>
    </div>
  )
}
