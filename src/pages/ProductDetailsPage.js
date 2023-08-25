import React from "react";
import { useParams } from "react-router-dom";
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
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={product.image} alt={product.name} className="img-fluid rounded" />
            <p className="mt-3 text-secondary">{product.description}</p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>{product.name}</h2>
            <p className="display-4">${product.price}</p>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <select className="form-control" id="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <button className="btn btn-primary my-2 mr-2">Add to Cart</button>
            <button className="btn btn-success my-2">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <h3>Reviews</h3>
        {product.reviews.map((review) => (
          <div key={review.id} className="card bg-secondary mb-3">
            <div className="card-body">
              <h5 className="card-title">{review.author}</h5>
              <p className="card-text">{review.comment}</p>
              <p className="card-text">Rating: {review.rating} stars</p>
            </div>
          </div>
        ))}
      </section>


    </div>
  );
};

export default ProductDetailsPage;
