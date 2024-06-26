import React from 'react';

function CartItem({ products, totalamount, decrement, increment,authenticated,clearCart,handleRemove }) {

    return (
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
                       {products?.length>0 && <div className='cart-clear'>
                            <button onClick={clearCart} data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-trash"></i> Clear</button>
                        </div>} 
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
                                                {/* <span className="price-regular"> ${list.price}</span> */}
                                                <span className="price-regular">${list.save>0?(list.price)-((list.price*list.save)/100):list.price}</span>{list.save>0?<del>${list.price}</del>:""}
                                                <button   title="Delete" className="tt-trash" onClick={()=>handleRemove(list.id)}>
                            
                                                <i class="bi bi-x-lg"></i>
                        </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {products.length > 0 ? "" : <p className="  text-center ">
                            <small>YOUR CART IS EMPTY.
                            </small>
                        </p>}
                        <div className="d-flex mb-4 mt-4">
                            <span className=" "> TOTAL:</span>
                            <span className="text-wrap ms-auto"> ${totalamount} USD</span>
                        </div>
                        <hr />
                    </div>
                    <div className="bg_light p-4">
                        {
                            products.length===0?<button className="btn p-3 ttu fw700 w100"  disabled>Checkout</button>:<a className="btn p-3 ttu fw700 w100" href={authenticated?"/checkout":"/login"} >Checkout</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
