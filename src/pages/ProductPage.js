import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import pr1 from ".//images/3D1.jpg"
const ProductsPage = () => {
  const products = [
    { id: 1, name: "Product 1", price: 19.99, image: pr1 },
    { id: 2, name: "Product 2", price: 29.99, image: "/path/to/product2.jpg" },
    { id: 3, name: "Product 3", price: 14.99, image: "/path/to/product3.jpg" },
  ];

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>

      <section className="container py-5">
        <div className="row">
          {products.map((product) => (
            <Link
              to={`/productdetails/${product.id}`}
              key={product.id}
              className="col-md-4 mb-4 text-decoration-none text-dark"
            >
              <div className="card bg-secondary">
                <img src={product.image} className="card-img-top rounded-top" alt={product.name} />
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


    </div>
  );
};

export default ProductsPage;
