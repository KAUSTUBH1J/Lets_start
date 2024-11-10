import React,{useState} from 'react'

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
                    src="https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/t/w/0/-original-imah4gzvykvn3hbh.jpeg?q=90"
                    className="img-fluid rounded-start"
                    alt="Wireless Earbuds"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Wireless Earbuds</h5>
                    <p className="card-text">
                        High-quality wireless earbuds with noise cancellation.
                    </p>
                    <p className="card-text"><strong>Price:</strong> $49.99</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

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
  )
}
