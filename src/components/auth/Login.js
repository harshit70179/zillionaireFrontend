import React, { useState,useEffect } from 'react'
import Footer from '../widgets/Footer'
import Header from '../widgets/Header'
import { Link, useNavigate } from 'react-router-dom'
import { logIn } from '../services/Login'
import { RegisterValid } from '../validations/RegisterValid'
import { toast } from 'react-toastify'
import { useAuth } from '../../AuthContext'

function Login() {
  const { login,handleSetWishlist,authenticated } = useAuth();
  const navigate = useNavigate()
  const [disable, setDisable] = useState(false);
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });
  const [loginFieldErr, setLoginFieldErr] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState({
    eye: "bi-eye-slash",
    type: "password",
  });
  
  useEffect(()=>{
   if(authenticated){
    navigate("/", { replace: true });
   }
  },[authenticated])
   

  const handleShowPassword = () => {
    if (showPassword.type === "password") {
      setShowPassword({ eye: "bi-eye", type: "text" });
    } else {
      setShowPassword({ eye: "bi-eye-slash", type: "password" });
    }
  };

  const handleLoginField = (e) => {
    const { name, value } = e.target;
    setLoginField({ ...loginField, [name]: value });
    let checkLogin = RegisterValid(name, value);
    setLoginFieldErr({ ...loginFieldErr, [name]: checkLogin });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);

    setTimeout(() => {
      setDisable(false);
    }, 3000);
    for (let key in loginField) {
      let checkLogin = RegisterValid(key, loginField[key]);
      setLoginFieldErr({ ...loginFieldErr, [key]: checkLogin });
      if (checkLogin !== "") {
        return false;
      }
    }

    const data = {
      email: loginField.email,
      password: loginField.password,
    };
    let result = await logIn(data);
    if (result.status) {
      let token = result.authtoken;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("wishList",result.wish_list)
      handleSetWishlist(JSON.parse(result.wish_list))
      toast.dismiss();
      toast.success(result.message);
      setTimeout(function () {
        navigate("/", { replace: true });
      }, 1000);
      login();
      return false;
    } else {
      toast.dismiss();
      toast.error(result.message);
      return;
    }
  };

  return (
    <div>
      <Header />
      <section className="login pt-4 pt-md-5 bg_light">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="bg-white p-4">
                <div className="row align-items-center">
                  <div className="col-md-6 ">
                    <div className="login_img" >
                      <img src="/assets/img/login_bg.jpg" className="img-fluid" alt='' />
                    </div>
                  </div>
                  <div className="col-md-6  p-md-4 ">
                    <h3 className=" ">Welcome Back</h3>
                    <p className=" ">Sign into your existing account to see your wishlist, check out faster, track existing orders and more.</p>
                    <div className="login-reg-form-wrap">
                      <form onSubmit={handleSubmit}>
                        <div className="single-input-item mb-3">
                          <div>
                            <input type="email" placeholder="* Email" name="email" onChange={handleLoginField} value={loginField.email} />
                          </div>
                          <span className='text-danger'>{loginFieldErr.email}</span>
                        </div>
                        <div className="single-input-item mb-3">
                          <div className='password-group'>
                            <input type={showPassword.type} className='password' placeholder="* Password" name="password" onChange={handleLoginField} value={loginField.password} />
                            <span
                              role="button"
                              onClick={handleShowPassword}
                              className="eye-icon"
                            >
                              <i className={`bi ${showPassword.eye}`}></i>
                            </span>
                          </div>
                          <span className='text-danger'>{loginFieldErr.password}</span>
                        </div>
                        <div className="text-end">
                          <Link to="/forget-password" className="forget-pwd tdu">Forget Password?</Link>
                        </div>
                        <div className="single-input-item mt-3">
                          <button className="btn btn-sqr w100" disabled={disable}>LOGIN</button>
                        </div>
                        <div className="single-input-item mt-3 text-center">
                          <Link to="/register" className="forget-pwd tdu">  Don't have an account yet? Create one!</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Login
