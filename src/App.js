import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ReceiptPage from "./pages/ReceiptPage";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminPage from "./pages/AdminPage";
import AdminResponsePage from "./pages/AdminResponsePage";
import EditUserPage from "./pages/EditUserPage";
import EducationPage from "./pages/EducationPage";
import IngredientsPage from "./pages/IngredientsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterUserPage from "./pages/RegisterUserPage";
import Navigation from "./pages/NavBar";
import { AuthProvider } from './sessions/authContext';
import PrivateRoute from './sessions/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user" element={<PrivateRoute element={<UserPage />} />} />
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminresponse" element={<AdminResponsePage />} />
        <Route path="/edituser" element={<EditUserPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/productdetails/:productId" element={<ProductDetailsPage />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
