import React, { useState } from 'react';
import Cart_item from './CartItem';
import { useSelector } from 'react-redux';



export default function Cart() {
  // Set a static quantity for demonstration (you can later bind it with Redux state)
  const ListItem = useSelector((state)=>state.shops.Items);
  const ListID = useSelector((state)=>state.shops.Carts);

  console.log(ListID)
  console.log(ListItem)

  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="container p-5">
      
      <div className="row">
          <div className="col-8">
            {ListItem.map((element)=>{
                
            })}
            <Cart_item/>
          </div>
          <div className="col-4">col-4</div>
        </div>
    </div>
  );
}
