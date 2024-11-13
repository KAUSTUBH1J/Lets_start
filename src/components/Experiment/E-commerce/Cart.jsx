import React, { useState, useEffect } from 'react';
import Cart_item from './CartItem';
import { useSelector } from 'react-redux';



export default function Cart() {
  // Set a static quantity for demonstration (you can later bind it with Redux state)
  const products = useSelector((state)=>state.shops.Items);
  const ids = useSelector((state)=>state.shops.Carts);

  // const filteredProducts = ListItem.filter(product => ListID.includes(product.id));
  // console.log(filteredProducts);

  const result = ids
  .map(({ id, qty }) => {
    const product = products.find(p => p.id === id); // Find product with matching id
    if (product) {
      return { ...product, qty }; // Return product with qty if found
    }
    return null; // Return null if no product found (optional)
  })
  .filter(product => product !== null); // Filter out any null values

  
    
  console.log('result');
  console.log(result);

  const [progress, setProgress] = useState(0);

  const setProgressBar = (progress)=>{
    setProgress(progress);
  }

  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  
  return (
    <div className="container p-5">
      
      <div className="row">
          <div className="col-8">
            {/* {
              ListID.map((id)=>{
                ListItem.map((element)=>{
                  return id
                })
              })
            } */}

            
            {/* <Cart_item/> */}
          </div>
          <div className="col-4">col-45</div>
        </div>
    </div>
  );
}
