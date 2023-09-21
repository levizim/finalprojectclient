import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getProductById } from '../../api/productApi';
import { IMAGES, getDefaultImage } from '../images/products/imageImport';
import { useAuth } from '../../UserAuth/authContext';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // For storing selected quantity
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const { currentUser } = useAuth();  // Get the current user from the authentication context

  const handleBuyNow = () => {
    if (currentUser) {
      handleAddToCart(); // Add to cart
      navigate('/checkout'); // Navigate directly to checkout
    } else {
      navigate('/signin');  // If user is not logged in, navigate to the sign-in page
    }
  };
  const defaultReviews = [
    { id: 1, author: "User 1", rating: 4, comment: "Great product!" },
    { id: 2, author: "User 2", rating: 5, comment: "Highly recommended!" },
  ];
  const handleAddToCart = () => {
    let currentCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product is already in the cart
    const existingProductIndex = currentCart.findIndex(p => p.ProductID === product.ProductID);

    if (existingProductIndex > -1) {
        // If it is, update the quantity
        currentCart[existingProductIndex].quantity += quantity;
    } else {
        // If not, add the product to the cart with the selected quantity
        const productWithQuantity = { ...product, quantity: quantity, ImageName: product.ImageName};
        currentCart.push(productWithQuantity);
    }

    // Update local storage
    localStorage.setItem('cart', JSON.stringify(currentCart));

    // Show notification
    setShowNotification(true); 
};
  const handleNotificationOk = () => {
    setShowNotification(false);
    navigate('/products'); // Adjust to your products route
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

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
            < div className="form-group">
              <label htmlFor="quantity">Quantity:</label>
              <select className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange}>
                {[...Array(20)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary my-2 mr-2" onClick={handleAddToCart}>Add to Cart</button>
            <button className="btn btn-success my-2" onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </section>

      <section className="container mt-4">
  <h3>Reviews</h3>
  {defaultReviews.map((review) => (
    <div key={review.id} className="card bg-white mb-3 text-dark">
      <div className="card-body">
        <h5 className="card-title">{review.author}</h5>
        <p className="card-text">{review.comment}</p>
        <p className="card-text">Rating: {review.rating} stars</p>
      </div>
    </div>
  ))}
</section>

{showNotification && (
    <>
    <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(50, 50, 50, 0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{backgroundColor: 'grey', borderRadius: '5px', padding: '40px', maxWidth: '80%', zIndex: 10000, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p style={{color: 'black', fontSize: '24px', marginBottom: '20px'}}>Add to cart successful!</p>
            <button type="button" className="btn btn-primary" onClick={handleNotificationOk}>
                OK
            </button>
        </div>
    </div>
    </>
)}

    </div>
  );
};

export default ProductDetailsPage;