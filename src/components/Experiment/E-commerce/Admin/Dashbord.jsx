import React from 'react';
import { Link } from 'react-router-dom';
// Import Bootstrap styles
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div className="container my-4">
        <div className='d-flex d-flex justify-content-between'>
            <h1 className="mb-4">E-Commerce Dashboard</h1>
            <Link className='btn btn-outline-primary' to='/E-commerce/admin/add_item' style={{'height': 'fit-content'}}> Add New Item</Link>         
        </div>
      {/* Overview Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">$24,500</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">1,200</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">New Users</h5>
              <p className="card-text">1,500</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text">150</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Statistics</h5>
              <p>Graph or chart goes here.</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recent Transactions</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Order #1023 - $150.00</li>
                <li className="list-group-item">Order #1024 - $200.00</li>
                <li className="list-group-item">Order #1025 - $75.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* User Activity */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">User Activity</h5>
          <p>User login stats, most viewed products, etc.</p>
        </div>
      </div>
    </div>
  );
}
