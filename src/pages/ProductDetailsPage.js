import React from "react";
import { useParams } from "react-router-dom";

import Navigation from "./NavBar"; // Adjust the import path accordingly
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductDetailsPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL parameter

  // Replace this with actual product data retrieval based on productId
  const product = {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image: "/path/to/product1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reviews: [
      { id: 1, author: "User 1", rating: 4, comment: "Great product!" },
      { id: 2, author: "User 2", rating: 5, comment: "Highly recommended!" },
    ],
  };

  return (
    <div>
      <Navigation />

      <section className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
            <p className="mt-3">{product.description}</p>
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <select className="form-control" id="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                {/* Add more options if needed */}
              </select>
            </div>
            <button className="btn btn-primary mr-2">Add to Cart</button>
            <button className="btn btn-success">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <h3>Reviews</h3>
        {product.reviews.map((review) => (
          <div key={review.id} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{review.author}</h5>
              <p className="card-text">{review.comment}</p>
              <p className="card-text">Rating: {review.rating} stars</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetailsPage;
