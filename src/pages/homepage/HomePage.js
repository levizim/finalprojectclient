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
            Dedicated to Quality
Welcome to our mushroom coffee business! We are a group of five friends who have come together to share our love for mushrooms and coffee. With a shared passion for health and wellness, we have created a unique line of mushroom-infused coffees.



Our goal is simple: to provide you with a delicious and health-conscious coffee experience. By carefully selecting the finest coffee beans and combining them with premium mushroom extracts, we have crafted blends that offer both great taste and potential wellness benefits.



We take pride in sourcing our mushrooms from trusted suppliers who uphold high standards of cultivation and extraction. This ensures that each cup of our mushroom coffee delivers the best possible quality and flavor.



Our mushroom coffees are designed to support your well-being. Whether you're seeking an energy boost, immune system support, or mental clarity, our blends offer a natural and convenient way to incorporate the power of mushrooms into your daily routine.



We are excited to share our passion with you and invite you to join us on this journey. Together, let's discover the unique flavors and potential health benefits that our mushroom coffees have to offer.



Thank you for choosing our mushroom coffee. Cheers to good friends and a healthier you!
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
