import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/productDetail/ProductDetail";
import Profile from "./components/pages/profile/Profile";
import WishList from "./components/pages/wishList/WishList";
import Tac from "./components/pages/sitePolicy/Tac";
import Shipping from "./components/pages/sitePolicy/Shipping";
import ReturnPolicy from "./components/pages/sitePolicy/ReturnPolicy";
import SubCategoryProduct from "./components/pages/products/SubCategoryProduct";
import PrivacyPolicy from "./components/pages/sitePolicy/PrivacyPolicy";
import CheckOut from "./components/pages/checkout/CheckOut";
import Faqs from "./components/pages/sitePolicy/Faqs";
import Cart from "./components/pages/cart/Cart";
import Search from "./components/pages/search/Search";
import AllProducts from "./components/pages/products/AllProducts";
import ForgetPassword from "./components/auth/ForgetPassword";
import ExploreProduct from "./components/pages/products/ExploreProduct";
import UserVerified from "./components/auth/UserVerified";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/:main_category_id/:main_category_name" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id/:category_name" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id/:sub_category_id/:sub_category_name" element={<Products/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path="/search/:searchValue" element={<Search/>} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/sub-category-products/:sub_category_id/:sub_category_name" element={<SubCategoryProduct/>} />
        <Route path="/explore-products/:main_category_id" element={<ExploreProduct/>} />
        <Route path="/wish-list" element={<WishList/>} />
        <Route path="/tac" element={<Tac/>} />
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/return-policy" element={<ReturnPolicy/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<Faqs/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/registration-seccessfully/:id" element={<UserVerified/>} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
