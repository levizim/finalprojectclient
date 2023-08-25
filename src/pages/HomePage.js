import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import homeimage from "./images/homePage.jpeg"
const HomePage = () => {
  const topSellingProducts = [
    { id: 1, name: "Coffee", price: 19.99 },
    { id: 2, name: "Decaf", price: 29.99 },
    { id: 3, name: "Tea", price: 14.99 },
    { id: 4, name: "Green Tea", price: 16.99 },
    { id: 5, name: "Espresso", price: 23.99 },
    { id: 6, name: "Cappuccino", price: 24.99 },
    { id: 7, name: "Latte", price: 22.99 },
  ];

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>

      <section className="container">
        <div className="row">

          {/* Image with Circle Inside */}
          <div className="col-md-6 text-center position-relative">
            <div style={{border: '5px double white'}}>
              <img 
                src={homeimage}
                alt="home" 
                className="img-fluid" 
                style={{width: '100%', height: 'auto', display: 'block'}}
              />
            </div>
            <div style={{
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(128, 128, 128, 0.7)', 
              padding: '10px',
              width: '150px',
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Link to="/products" style={{ 
                  color: 'white', 
                  textDecoration: 'none', 
                  padding: '5px 10px', 
                  border: '2px solid yellow', 
                  borderRadius: '5px',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}>
                Buy Now
              </Link>
            </div>
          </div>

          {/* Top Selling Products */}
          <div className="col-md-6">
            <h2>Top Selling Products</h2>
            <ul className="list-group">
              {topSellingProducts.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
                >
                  {product.name}
                  <span className="badge badge-primary badge-pill">
                    ${product.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
      <section className="container mt-4">
        {/* About Us */}
        <div className="row">
          <div className="col-md-12">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              felis vitae odio ultricies convallis. Sed vehicula viverra semper.
            </p>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        {/* Social Links */}
        <div className="row">
          <div className="col-md-12">
            <h2>Follow Us</h2>
            <a href="https://www.facebook.com" className="btn btn-primary mr-2">
              Facebook
            </a>
            <a href="https://www.twitter.com" className="btn btn-info">
              Twitter
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
