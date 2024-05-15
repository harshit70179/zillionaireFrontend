import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament, removeAll, remove, total } from '../../../redux/cartSlice';
import { useAuth } from '../../../AuthContext';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import { Link } from 'react-router-dom';

function Cart() {
    const dispatch = useDispatch();
    const { authenticated } = useAuth();
    const { item: products, totalamount, grandtotal } = useSelector((state) => state.cart);
    const handleincrement = (id) => {
        dispatch(increament(id));
    };

    const handledecreament = (id) => {
        dispatch(decreament(id));
    };

    const clearCart = () => {
        dispatch(removeAll())
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId));
        dispatch(total())
    };

    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light pt-4 pb-1 pt-md-5 pb-md-5 text-center">
                <div className="container">
                    <h3 className="mb-4">Cart</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">

                    {products.length > 0 && <div className="shoppingcart">
                        <div className="tt-shopcart-table-02">
                            <table className='w-100'>
                                <tbody>
                                    {products.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="tt-product-img">
                                                        <img src={item.images} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h4><Link to={`/product-detail/${item.id}`}>{item.title}</Link></h4>
                                                    <p>{item.finishing} / {item.size}</p>
                                                </td>

                                                <td>
                                                    <div className="tt-price"><span className="money">$ {item.save < 1 ? <span>{item.price}</span> : <span>{(item.price) - ((item.price * item.save) / 100)}</span>}</span> <del>${item.price}</del></div>
                                                </td>
                                                <td>
                                                    <div className="btn-group quantity-btn" role="group" aria-label="Basic example">
                                                        <button type="button" className="btn " onClick={() => { handledecreament(item.id) }}>-</button>
                                                        <button type="button" className="btn ">{item.quantity}</button>
                                                        <button type="button" className="btn" onClick={() => { handleincrement(item.id) }}>+</button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="tt-price subtotal"><span className="money">$ {item.state < 1 ? item.quantity * item.price : item.quantity * ((item.price) - ((item.price * item.save) / 100))}</span></div>
                                                </td>
                                                <td>
                                                    <button title="Delete" className="btn btn-primary" onClick={() => handleRemove(item.id)}>
                                                        <i className="bi bi-trash"></i>

                                                    </button>
                                                </td>
                                            </tr>



                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className="tt-shopcart-btn">
                                <div className="col-left">
                                    <Link className="btn-link" to="/"><i className="fa fa-reply"></i>CONTINUE SHOPPING</Link>
                                </div>
                                <div className="col-right">
                                    <button className="btn btn-primary" onClick={clearCart}>
                                        <i className="fa fa-trash"></i> CLEAR SHOPPING CART
                                    </button>

                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-md-3'>

                                </div>
                                <div className='col-md-3'>

                                </div>
                                <div className='col-md-3'>

                                </div>
                                <div className='col-md-3'>
                                    <div className='cart-sub'>
                                        <div className='sub-total'>
                                            <p>Subtotal</p>
                                            <p>$ {totalamount}</p>
                                        </div>
                                        <hr />
                                        <div className='sub-total'>
                                            <p>Total</p>
                                            <p>$ {grandtotal}</p>
                                        </div>
                                        <hr />
                                        <div>
                                            {
                                                products.length === 0 ? <button className="btn p-3 ttu fw700 w100" disabled>Checkout</button> : <a className="btn p-3 ttu fw700 w100" href={authenticated ? "/checkout" : "/login"} >Checkout</a>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {products.length == 0 ? <p className='text-center'>YOUR CART IS EMPTY.</p> : ""}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cart
