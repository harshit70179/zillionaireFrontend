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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/:main_category_id/:main_category_name" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id/:category_name" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id/:sub_category_id/:sub_category_name" element={<Products/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path="/wish-list" element={<WishList/>} />
        <Route path="/tac" element={<Tac/>} />
        <Route path="/shipping" element={<Shipping/>} />
        <Route path="/return-policy" element={<ReturnPolicy/>} />
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
