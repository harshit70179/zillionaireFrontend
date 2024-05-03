import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increament, decreament,removeAll,remove,total} from '../../../redux/cartSlice';
import { useAuth } from '../../../AuthContext';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';

function Cart() {
    const dispatch = useDispatch();
    const { authenticated } = useAuth();
    const { item: products, totalamount,grandtotal } = useSelector((state) => state.cart);
    const increment = (id) => {
        dispatch(increament(id));
    };
    
    const decrement = (id) => {
        dispatch(decreament(id));
    };

    const clearCart=()=>{
        dispatch(removeAll())
    }

    const handleRemove = (productId) => {
        dispatch(remove(productId));
        dispatch(total())
    };

  return (
    <>
        <Header />
            <div className="breadcrumb-area bg_light pt-5 pb-5 text-center">
                <div className="container">
                    <h3 className="mb-4">Cart</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    {products.length==0?<p className='text-center'>YOUR CART IS EMPTY.</p>:""}
                </div>
            </section>
            <Footer />
    </>
  )
}

export default Cart
