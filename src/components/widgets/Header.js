import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../AuthContext';
import { useGetHeaderQuery } from '../../redux/headerApi';
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, removeAll, remove, total } from '../../redux/cartSlice';
import { useSetWishListMutation } from '../../redux/userApi';
import CartItem from './CartItem';
import { useGetAllProductsQuery } from '../../redux/productsApi';

function Header() {
    const { data: allProducts } = useGetAllProductsQuery()
    const dispatch = useDispatch();
    const { item: products, totalamount, count } = useSelector((state) => state.cart);
    const { data } = useGetHeaderQuery()
    const { authenticated, logout, wishList } = useAuth();
    const [setWishList] = useSetWishListMutation()
    const [filterProduct, setFilterProduct] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [searchListShow,setSearchListShow]=useState("")
    const [showSearch,setShowsearch]=useState("")
    const [openMenu,setOpenMenu]=useState("")
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem("jwtToken")
        navigate("/login")
        logout();
    }

    const increment = (id) => {
        dispatch(increament(id));
    };

    const decrement = (id) => {
        dispatch(decreament(id));
    };

    const clearCart = () => {
        dispatch(removeAll())
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId));
        dispatch(total())
    };

    useEffect(() => {
        if (wishList && authenticated) {
            setWishList({ wish_list: JSON.stringify(wishList) })
        }
    }, [wishList])

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = allProducts?.filter(item =>
            Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
            )
        );
        setFilterProduct(filtered);
        if(filtered.length>0){
            setSearchListShow("active")
        }
        if(query===""){
            setSearchListShow("")
        }
    };
    
    const handleShowSearch=()=>{
        setShowsearch("active")
    }

    const handleCloseSearch=()=>{
        setShowsearch("")
    }

    const handleOpenMenu=()=>{
        setOpenMenu("active")
    }

    const handleCloseMenu=()=>{
        setOpenMenu("")
    }

    const handleSearch=(value)=>{
        navigate(`/search/${value}`)
        handleCloseSearch()
        setSearchQuery('')
    }

    return (
        <>
            <section id="topbar" className="text-center">
                <div className="container-fluid ">
                    <Link to="/" className="text-white">PRE-ORDER NOW ‘CRYSTAL FUSION’ – THE ALLURE OF WILD GEMS PAIRED WITH ORGANIC SHAPES</Link>
                </div>
            </section>

            <div className={`mobile_menu ${openMenu}`}>
            <div className="position-relative overflow-hidden">
                <div className='text-end pe-3 pt-2' onClick={handleCloseMenu}>
                    <i class="bi bi-x-lg"></i>
                </div>
                <Link to="/"><img src="/assets/img/logo.png" alt="" className="img-fluid" /></Link>
                <div className='scroll_menu'>
                    <ul className='m-0 p-0'>
                        <li><a className=' m_m collapsed' href='#' data-bs-toggle="collapse" data-bs-target="#Jewelry">Jewelry <i className="ms-auto bi bi-chevron-down"></i></a>
                        <div id="Jewelry" className="mobile_c_manu collapse">
                            <a className='ttu' href='#'>Rings <i className="ms-auto bi bi-chevron-right"></i></a>
                            <a className='ttu' href='#'>Earrings <i className="ms-auto bi bi-chevron-right"></i></a>
                            <a className='ttu' href='#'>Bracelets <i className="ms-auto bi bi-chevron-right"></i></a>
                            <a className='ttu' href='#'>Necklaces And Pendants <i className="ms-auto bi bi-chevron-right"></i></a>
                            <a className='ttu' href='#'>Shop By Gemstones <i className="ms-auto bi bi-chevron-right"></i></a>

                       <div className='mobile_menu2'>
                        <span className='d-flex bg_light ttu p-2'> <i className="bi bi-chevron-left"></i> <b className='m-auto'>Rings</b></span>
                        <a className='ttu' href='#'>Xyz </a>
                        <a className='ttu' href='#'>Xyz </a>
                        <a className='ttu' href='#'>Xyz </a>
                        <a className='ttu' href='#'>Xyz </a>
                        <a className='ttu' href='#'>Xyz </a>
                       </div>
                        </div>
                        </li>
                        <li><a href='#'>Men's Jewelry</a></li>
                        <li><a href='#'>New Collections</a></li>
                        <li><a href='/profile'>Profile</a></li>
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/wish-list'>Wish List</a></li>
                        <li><a href='#'>Logout</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <header id="header" className="d-lg-flex align-items-center">

                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <i className="bi bi-list mobile-nav-toggle" onClick={handleOpenMenu}></i>
                    <div className="logo ">
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

                    </nav>
                    <div className="header_right ml-auto d-flex   position-relative">
                        <div className={`header_right_item search_mobile ${showSearch}`}>
                            <div className='text-end dp_none1'>
                                <i class="bi bi-x-lg" onClick={handleCloseSearch}></i>
                            </div><div className={`position-relative  desk-search ${showSearch}`}>
                                <input type="tex" name="" className="search_input mr-3" placeholder="search" value={searchQuery}
                                    onChange={handleSearchChange} />
                                <div className={`serch_box ${searchListShow}`}>
                                    <ul className='p-0 m-0'>
                                        {filterProduct?.map((list)=>{
                                            return (
                                                <li key={list.id} onClick={()=>{handleSearch(list.title)}}>{list.title}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div></div>
                        <div className="header_right_item">
                            <span className='search-btn'>{showSearch?  <i class="bi bi-x-lg" onClick={handleCloseSearch}></i> :<i className="bi bi-search ifw20" onClick={handleShowSearch}></i>} </span>
                        </div>
                        <div className="header_right_item ms-3  mo_none">
                            <Link to="/wish-list"> <i className="bi bi-heart ifw20"></i></Link>

                        </div>
                        <div className="header_right_item ms-3 dropdown mo_none">
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

            <CartItem products={products} totalamount={totalamount} decrement={decrement} increment={increment} authenticated={authenticated} clearCart={clearCart} handleRemove={handleRemove} />
        </>
    )
}

export default Header
