import React, { useState, useEffect } from 'react';
import Product from './CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Products from './Product.json';
import { AddItem } from '../../../redux/E-commerce/shop';

export default function Home() {
  const itemList = useSelector((state)=>state.shops.Items);
  const Cart = useSelector((state)=>state.shops.Carts);
  const cartCount = Cart.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigateCart = () => {
    navigate('/E-commerce/cart');
  };

  useEffect(()=>{
    // setProducts(Products);
    if (itemList.length === 0) {
    console.log('Products');
    Products.forEach(element => {
      console.log(element);
      dispatch(AddItem(element))
    });
  }

  },[]); 
  console.log('itemList');
  console.log(itemList);


  return (
    <div className='container p-2'>
        <h2 className='text-center'>E-Commerce</h2>
        <div>
          <span className='d-flex justify-content-between'>
            <Link className='btn btn-outline-primary btn-sm' to='/E-commerce/admin' style={{'height': 'fit-content'}}>Admin Cantrol</Link>
            
            <div className="position-relative">
            <i className="fa-sharp-duotone fa-solid fa-cart-shopping m-3" onClick={handleNavigateCart} style={{ fontSize: '25px', cursor: 'pointer' }}></i>
            {cartCount > 0 && (
              <span className="badge rounded-pill bg-danger position-absolute" style={{ top: '-5px', right: '-5px' }}>
                {cartCount}
              </span>
            )}
          </div>
          </span>
        </div>
        <div className='d-flex justify-content-between flex-wrap items'>
          
          {
            itemList.map((element)=>{
              return <Product id={element.id} name={element.name} description={element.description} discount = {element.discount_percentage} price={element.price}/>
            })
          }
        </div>
    </div>
  )
}
