import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext';
import { useGetHeaderQuery } from '../../redux/headerApi';
import { useDispatch, useSelector } from 'react-redux';
import {increament, decreament} from '../../redux/cartSlice';

function Header() {
    const dispatch = useDispatch();
    const { item: products, totalamount,count } = useSelector((state) => state.cart);
    const { data } = useGetHeaderQuery()
    const { authenticated, logout } = useAuth();
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigate("/login")
        logout();
    }

    const increment = (id) => {
        dispatch(increament(id));
    };
    
    const decrement = (id) => {
        dispatch(decreament(id));
    };

    return (
        <>
            <section id="topbar" className="text-center">
                <div className="container-fluid ">
                    <Link to="/" className="text-white">PRE-ORDER NOW ‘CRYSTAL FUSION’ – THE ALLURE OF WILD GEMS PAIRED WITH ORGANIC SHAPES</Link>
                </div>
            </section>
            <header id="header" className="d-flex align-items-center">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link to="/"><img src="/assets/img/logo.png" alt="" className="img-fluid" /></Link>
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                            {data?.map((list) => {
                                return (
                                    list?.category.length === 0 ? <li><Link to={`/products/${list.id}/${list.main_category_name}`}>{list.main_category_name}</Link></li> : <li className={`dropdown ${list?.category.length <= 5 && list.category[0]?.sub_category.length > 0 ? "" : "main-dropdown"}`}><Link to={`/products/${list.id}/${list.main_category_name}`}><span>{list.main_category_name}</span>  <i className="bi bi-chevron-down"></i></Link>
                                        <div className="down_page">
                                            <div className='row'>
                                                {list.category.map((categoryList) => {
                                                    return (
                                                        categoryList?.sub_category.length === 0 ?
                                                            <div><Link to={`/products/${list.id}/${categoryList.category_id}/${categoryList.category_name}`}>{categoryList.category_name}</Link> </div>
                                                            : <div className="col-md-2">
                                                                <span className="child-level-item-title">{categoryList.category_name}</span>
                                                                <ul>
                                                                    {categoryList?.sub_category?.map((subCategoryList) => {
                                                                        return (<li><Link to={`/products/${list.id}/${categoryList.category_id}/${subCategoryList.id}/${subCategoryList.name}`}>{subCategoryList.name}</Link></li>)
                                                                    })}
                                                                </ul>
                                                            </div>


                                                    )
                                                })}
                                                {list?.category.length <= 5 && list.category[0]?.sub_category.length > 0 ? <div className="col-md-2">
                                                    <div className="bg_light menubanner p-4">
                                                        <img src="/assets/img/smallbanner2.jpg" className="img-fluid" alt='' />
                                                    </div>
                                                </div> : ""}
                                            </div>
                                        </div></li>
                                )
                            }
                            )
                            }
                            {/* <li><Link to="contact.html">Contact</Link></li> */}
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="header_right ml-auto d-flex">
                        <div className="header_right_item">
                            <input type="tex" name="" className="search_input mr-3" placeholder="search" />

                        </div>
                        <div className="header_right_item">
                            <Link to="/"> <i className="bi bi-search ifw20"></i></Link>
                        </div>
                        <div className="header_right_item ms-3 ">
                            <Link to="/"> <i className="bi bi-heart ifw20"></i></Link>

                        </div>
                        <div className="header_right_item ms-3 dropdown">
                            <Link> <i className="bi bi-person ifw20"></i></Link>
                            <div className="dropdown-content">
                                {authenticated ? <><Link to="/profile" className='text-center'>PROFILE</Link><button onClick={logOut} >LOGOUT</button></> : <>
                                    <Link to="/login" className='text-center'>LOG IN</Link>
                                    <Link to="/register" className='text-center'>SIGN UP</Link>
                                </>}

                            </div>
                        </div>
                        <div className="header_right_item ms-3 position-relative">
                            <Link to="/" data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="bi bi-handbag ifw20"></i></Link>
                            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                {count}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="modal mt-0  cart_popop" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="text-wrap"> CONTINUE SHOPPING</span>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">  </button>
                        </div>
                        <div className="modal-body ">
                            <p className="text-wrap text-center"> ALMOST THERE! ADD $250.00 TO RECEIVE FREE SHIPPING!
                            </p>
                            <hr />
                            {products?.map((list) => {

                                return (
                                    <div className='d-flex mb-3'>
                                        <div className='cart-img'> <img src={list.images} alt='' className='img-fluid' /></div>
                                        <div className='cart-h'>
                                            <h5>{list.title}</h5>
                                            <p>{list.finishing}</p>
                                            <div className=' cart-des'>
                                                <div className="quantity-cart-box d-flex align-items-center">
                                                    <div className="quantity">
                                                        <div className="pro-qty"><span className="dec qtybtn" onClick={() => { decrement(list.id) }}>-</span><span className='qa'>{list.quantity}</span><span className="inc qtybtn" onClick={() => { increment(list.id) }}>+</span></div>
                                                    </div>
                                                </div>
                                                <div className='price-box'>
                                                    <span className="price-regular"> ${list.price}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            <p className="  text-center ">
                                <small>YOUR CART IS EMPTY.
                                </small>
                            </p>
                            <div className="d-flex mb-4 mt-4">
                                <span className=" "> TOTAL:</span>
                                <span className="text-wrap ms-auto"> ${totalamount} USD</span>
                            </div>
                            <hr />
                        </div>
                        <div className="bg_light p-4">
                            <Link className="btn p-3 ttu fw700 w100" to="/">Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
