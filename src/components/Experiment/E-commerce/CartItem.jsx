import React, { useState } from 'react';

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);

  // Handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <div className="card w-100 mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyMneeyxLU4dv_KIFIfAopwFB5xRtTd3BYw5sIoVN1eowskiMdyTAB9psZ6OEPzl5SfmKg&s"
              className="img-fluid rounded-start"
              alt="Wireless Earbuds"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Wireless Earbuds</h5>
              <p className="card-text">
                High-quality wireless earbuds with noise cancellation.
              </p>
              <p className="card-text"><strong>Price:</strong> $49.99</p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>

              {/* Quantity Selector */}
              <div className="d-flex align-items-center">
                <label htmlFor="quantity" className="me-2">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  min="1"
                  className="form-control w-25"
                  onChange={handleQuantityChange}
                />
              </div>

              {/* Add to Cart Button */}
              <button className="btn btn-primary mt-3">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
