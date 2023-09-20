import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductById } from '../../api/productApi';
import { IMAGES, getDefaultImage } from '..//images/imageImport';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultReviews = [
    { id: 1, author: "User 1", rating: 4, comment: "Great product!" },
    { id: 2, author: "User 2", rating: 5, comment: "Highly recommended!" },
  ];

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const productData = await getProductById(productId);
        setProduct(productData);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching the product details:", err.message);
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const getImage = (imageName) => {
    return IMAGES[imageName] || getDefaultImage();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={getImage(product.ImageName)} alt={product.ProductName} className="img-fluid rounded" />
            <p className="mt-3 text-secondary">{product.Description}</p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>{product.ProductName}</h2>
            <p className="display-4">${product.Price}</p>
            <div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <select className="form-control" id="quantity">
                {[...Array(20)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary my-2 mr-2">Add to Cart</button>
            <button className="btn btn-success my-2">Buy Now</button>
          </div>
        </div>
      </section>

      <section className="container mt-4">
        <h3>Reviews</h3>
        {defaultReviews.map((review) => (
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
