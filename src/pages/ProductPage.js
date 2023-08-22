import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductsPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "/path/to/product1.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "/path/to/product2.jpg" },
    { id: 3, name: "Product 3", price: 14.99, image: "/path/to/product3.jpg" },
  ];

  return (
    <div>


      <section className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <Link
              to={`/productdetails/${product.id}`} // Use the appropriate route for product details
              key={product.id}
              className="col-md-4 mb-4 text-decoration-none"
            >
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductsPage;
