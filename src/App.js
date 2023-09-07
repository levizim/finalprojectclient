import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/hompage/HomePage";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/sale/CartPage";
import CheckoutPage from "./pages/sale/CheckoutPage";
import ReceiptPage from "./pages/sale/ReceiptPage";
import SignInPage from "./pages/log in/SignInPage";
import UserPage from "./pages/user/UserPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminPage from "./pages/admin/AdminPage";
import AdminResponsePage from "./pages/admin/AdminResponsePage";
import EditUserPage from "./pages/sale/EditUserPage";
import EducationPage from "./pages/hompage/EducationPage";
import IngredientsPage from "./pages/hompage/IngredientsPage";
import ProductDetailsPage from "./pages/product/ProductDetailsPage";
import RegisterUserPage from "./pages/user/RegisterUserPage";
import Navigation from "./pages/NavBar";
import Forgot from './pages/log in/Forgot';
import ResetPW from './pages/log in/resetPW';
import { AuthProvider } from './UserAuth/authContext';
import PrivateRoute from './UserAuth/PrivateRoute';


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
        <Route path="/Forgot" element={<Forgot />} />
        <Route path="/reset/:token" element={<ResetPW />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
