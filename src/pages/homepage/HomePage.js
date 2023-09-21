import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import homeimage from "../images/homePage.jpeg";
import { getBestSellingProducts } from '../../api/productApi'; // Import the getAllProducts function

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getBestSellingProducts();
      console.log(data)
      setProducts(data); 
    };

    fetchProducts();
  }, []);

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
            {products.map((product) => (
              <li
                key={product.ProductID}
                className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
              >
                {product.ProductName} - {product.TotalOrderedQuantity} units
                <span className="badge badge-primary badge-pill">
                  ${product.Price}
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
            Quality in Every Cup
Discover the fusion of mushrooms and coffee, crafted by enthusiasts with a flair for wellness. Our brews merge the finest beans with choice mushroom extracts, aiming to boost energy, immunity, and clarity. Dive into a unique blend of flavor and health. Cheers to a mindful sip!
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
