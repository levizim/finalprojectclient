import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IMAGES, getDefaultImage } from '../images/products/imageImport';
import { getAllProducts } from '../../api/productApi';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData); 
      } catch (error) {
        console.error("Error fetching the product data:", error.message);
      }
    };
    fetchProducts();
  }, []);

  const getImage = (imageName) => {
    return IMAGES[imageName] || getDefaultImage();
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    overflow: "hidden"
  };

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <section className="container py-5">
        <div className="row">
          {products.map((product) => (
            <Link
              to={`/productdetails/${product.ProductID}`}
              key={product.ProductID}
              className="col-md-4 mb-4 text-decoration-none text-dark"
            >
              <div className="card bg-secondary">
                <img 
                    src={getImage(product.ImageName)} 
                    style={imageStyle}
                    className="card-img-top rounded-top" 
                    alt={product.ProductName} 
                />
                <div className="card-body">
                  <h5 className="card-title">{product.ProductName}</h5>
                  <p className="card-text">${product.Price}</p>
                  <button className="btn btn-primary">View Product</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
