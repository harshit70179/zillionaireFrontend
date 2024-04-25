import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import ProductDetail from "./components/pages/productDetail/ProductDetail";
import Profile from "./components/pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products/:main_category_id" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id" element={<Products/>} />
        <Route path="/products/:main_category_id/:category_id/:sub_category_id" element={<Products/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />

        
      
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
