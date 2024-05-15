import React, { useState,useEffect } from 'react'
import Footer from '../widgets/Footer'
import Header from '../widgets/Header'
import { Link, useNavigate } from 'react-router-dom'
import { forgetPassword } from '../services/Login'
import { RegisterValid } from '../validations/RegisterValid'
import { toast } from 'react-toastify'
import { useAuth } from '../../AuthContext'

function ForgetPassword() {
    const { authenticated } = useAuth();
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false);
    const [loginField, setLoginField] = useState({
        email: "",
    });
    const [loginFieldErr, setLoginFieldErr] = useState({
        email: "",
    });

    useEffect(() => {
        if (authenticated) {
            navigate("/", { replace: true });
        }
    }, [authenticated])

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
        };
        let result = await forgetPassword(data);
        if (result.status) {
            toast.dismiss();
            toast.success(result.message);
            setTimeout(function () {
                navigate("/", { replace: true });
            }, 1000);
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
                                        <h3 className=" ">Forget Password</h3>
                                        <div className="login-reg-form-wrap">
                                            <form onSubmit={handleSubmit}>
                                                <div className="single-input-item mb-3">
                                                    <div>
                                                        <input type="email" placeholder="* Email" name="email" onChange={handleLoginField} value={loginField.email} />
                                                    </div>
                                                    <span className='text-danger'>{loginFieldErr.email}</span>
                                                </div>
                                                <div className="single-input-item mt-3">
                                                    <button className="btn btn-sqr w100" disabled={disable}>Forget Password</button>
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

export default ForgetPassword
