import React, { useState } from 'react'
import Header from '../widgets/Header'
import Footer from '../widgets/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterValid } from '../validations/RegisterValid';
import { register } from '../services/Login';
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false);
    const [registerField, setRegisterField] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [registerFieldErr, setRegisterFieldErr] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState({
        eye: "bi-eye-slash",
        type: "password",
    });
    const handleShowPassword = () => {
        if (showPassword.type === "password") {
            setShowPassword({ eye: "bi-eye", type: "text" });
        } else {
            setShowPassword({ eye: "bi-eye-slash", type: "password" });
        }
    };

    const handleRegisterField = (e) => {
        const { name, value } = e.target;
        setRegisterField({ ...registerField, [name]: value });
        let checkRegister = RegisterValid(name, value);
        setRegisterFieldErr({ ...registerFieldErr, [name]: checkRegister });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);

        setTimeout(() => {
            setDisable(false);
        }, 3000);
        for (let key in registerField) {
            let checkRegister = RegisterValid(key, registerField[key]);
            setRegisterFieldErr({ ...registerFieldErr, [key]: checkRegister });
            if (checkRegister !== "") {
                return false;
            }
        }

        const data = {
            first_name: registerField.firstName,
            last_name: registerField.lastName,
            email: registerField.email,
            password: registerField.password,
        };
        let result = await register(data);
        if (result.status) {
            toast.dismiss();
            toast.success(result.message);
            setTimeout(function () {
                navigate("/login", { replace: true });
            }, 1000);
            return false;
        } else {
            toast.dismiss();
            toast.error(result.message);
            return;
        }
    };

    return (
        <>
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
                                    <div className="col-md-6  p-md-4  ">
                                        <h3 className="text-center">Create an Account</h3>
                                        <p className="text-center">Create an account with us for a faster checkout, easy order tracking, saving your favorite products, and so much more.
                                        </p>
                                        <div className="login-reg-form-wrap">
                                            <form onSubmit={handleSubmit}>
                                                <div className="single-input-item mb-3">
                                                    <div>
                                                        <input type="text" placeholder="*First Name" name='firstName' onChange={handleRegisterField} value={registerField.firstName} />
                                                    </div>
                                                    <span className='text-danger'>{registerFieldErr.firstName}</span>
                                                </div>
                                                <div className="single-input-item mb-3">
                                                    <div>
                                                        <input type="text" placeholder="*Last Name" name='lastName' onChange={handleRegisterField} value={registerField.lastName} />
                                                    </div>
                                                    <span className='text-danger'>{registerFieldErr.lastName}</span>
                                                </div>
                                                <div className="single-input-item mb-3">
                                                    <div>
                                                        <input type="email" placeholder="*Email" name="email" onChange={handleRegisterField} value={registerField.email} />
                                                    </div>
                                                    <span className='text-danger'>{registerFieldErr.email}</span>
                                                </div>
                                                <div className="single-input-item mb-3">
                                                    <div className="password-group">
                                                        <input type={showPassword.type} placeholder="*Password" name="password" onChange={handleRegisterField} value={registerField.password} className='password' />
                                                        <span
                                                            role="button"
                                                            onClick={handleShowPassword}
                                                            className="eye-icon"
                                                        >
                                                            <i className={`bi ${showPassword.eye}`}></i>
                                                        </span>
                                                    </div>
                                                    <span className='text-danger'>{registerFieldErr.password}</span>
                                                </div>
                                                <div className="single-input-item mt-3">
                                                    <button type="submit" className="btn btn-sqr w100" disabled={disable}>CREATE ACCOUNT</button>
                                                </div>
                                                <div className="single-input-item mt-3 text-center">
                                                    <Link to="/login" className="forget-pwd tdu"> Already have an account? Sign in</Link>
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
        </>
    )
}

export default Register
