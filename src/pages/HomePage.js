import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HomePage = () => {
  const topSellingProducts = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 14.99 },
  ];

  return (
    <div>


      <section className="container mt-4">
        {/* Top Selling Products */}
        <div className="row">
          <div className="col-md-6">
            <h2>Top Selling Products</h2>
            <ul className="list-group">
              {topSellingProducts.map((product) => (
                <li
                  key={product.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {product.name}
                  <span className="badge badge-primary badge-pill">
                    ${product.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Central Picture */}
          <div className="col-md-6">
            <Link to="/products">
              <img
                src="/path/to/central-image.jpg"
                alt="Central"
                className="img-fluid"
              />
            </Link>
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
