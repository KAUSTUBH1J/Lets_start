import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddItem } from '../../../../redux/E-commerce/shop'; 

export default function ItemForm({ item, onSave }) {
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: item?.id || '',
    name: item?.name || '',
    description: item?.description || '',
    image_url: item?.image_url || '',
    discount_percentage: item?.discount_percentage || 0,
    price: item?.price || '',
    available_qty: item?.available_qty || '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddItem(formData));
        setFormData( {id:  '',
            name: '',
            description:'',
            image_url: '',
            discount_percentage: 0,
            price:  '',
            available_qty: '',
        })
        console.log(formData);
    };

  return (
    <>
        <div className='container'> 
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit} className="my-4">
                <div className="form-group mb-3">
                    <label htmlFor="name">Item Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="image_url">Image URL</label>
                    <input
                    type="text"
                    className="form-control"
                    id="image_url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="discount_percentage">Discount (%)</label>
                    <input
                    type="number"
                    className="form-control"
                    id="discount_percentage"
                    name="discount_percentage"
                    value={formData.discount_percentage}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="price">Price ($)</label>
                    <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="available_qty">Available Quantity</label>
                    <input
                    type="number"
                    className="form-control"
                    id="available_qty"
                    name="available_qty"
                    value={formData.available_qty}
                    onChange={handleChange}
                    min="0"
                    required
                    />
                </div>

                <button type="submit" className="btn btn-success">
                    {item ? 'Update Item' : 'Add Item'}
                </button>
            </form>
            
        </div>
    </>
    
  );
}
