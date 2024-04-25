import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext';
import { useGetHeaderQuery } from '../../redux/headerApi';

function Header() {
    const { data } = useGetHeaderQuery()
    console.log(data, "data")
    const { authenticated, logout } = useAuth();
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.clear()
        navigate("/login")
        logout();
    }
    return (
        <>
            <section id="topbar" class="text-center">
                <div class="container-fluid ">
                    <Link to="/" class="text-white">PRE-ORDER NOW ‘CRYSTAL FUSION’ – THE ALLURE OF WILD GEMS PAIRED WITH ORGANIC SHAPES</Link>
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
                                    list?.category.length === 0 ? <li><Link to={`/products/${list.id}`}>{list.main_category_name}</Link></li> : <li className={`dropdown ${list?.category.length <= 5 && list.category[0]?.sub_category.length > 0?"":"main-dropdown"}`}><Link to={`/products/${list.id}`}><span>{list.main_category_name}</span>  <i className="bi bi-chevron-down"></i></Link>
                                        <div className="down_page">
                                            <div className='row'>
                                                {list.category.map((categoryList) => {
                                                    return (
                                                        categoryList?.sub_category.length === 0 ?
                                                            <div><Link to={`/products/${list.id}/${categoryList.category_id}`}>{categoryList.category_name}</Link> </div>
                                                            : <div className="col-md-2">
                                                                <span className="child-level-item-title">{categoryList.category_name}</span>
                                                                <ul>
                                                                    {categoryList?.sub_category?.map((subCategoryList) => {
                                                                        return (<li><Link to={`/products/${list.id}/${categoryList.category_id}/${subCategoryList.id}`}>{subCategoryList.name}</Link></li>)
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
                        <div class="header_right_item">
                            <input type="tex" name="" class="search_input mr-3" placeholder="search" />

                        </div>
                        <div className="header_right_item">
                            <Link to="/"> <i className="bi bi-search ifw20"></i></Link>
                        </div>
                        <div className="header_right_item ms-3 ">
                            <Link to="/"> <i className="bi bi-heart ifw20"></i></Link>

                        </div>
                        <div className="header_right_item ms-3 dropdown">
                            <Link> <i className="bi bi-person ifw20"></i></Link>
                            <div class="dropdown-content">
                                {authenticated ? <><Link to="/profile" className='text-center'>PROFILE</Link><button onClick={logOut} >LOGOUT</button></> : <>
                                    <Link to="/login" className='text-center'>LOG IN</Link>
                                    <Link to="/register" className='text-center'>SIGN UP</Link>
                                </>}

                            </div>
                        </div>
                        <div className="header_right_item ms-3">
                            <Link to="/"> <i className="bi bi-handbag ifw20"></i></Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
