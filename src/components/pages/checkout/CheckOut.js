import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useSetOrderMutation } from '../../../redux/orderApi';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { removeAll } from '../../../redux/cartSlice';

function CheckOut() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [setOrder] = useSetOrderMutation()
    const { item: products, totalamount, grandtotal, count } = useSelector((state) => state.cart);
    const [infoField, setInfoField] = useState({ email: "", firstName: "", lastName: "", mobileNumber: "", address: "" })
    const handleChange = (e) => {
        const { name, value } = e.target
        setInfoField({ ...infoField, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: infoField.email,
            first_name: infoField.firstName,
            last_name: infoField.lastName,
            mobile_number: infoField.mobileNumber,
            address: infoField.address,
            total: totalamount,
            grand_total: grandtotal,
            discount: 0,
            shipping: 0,
            product_items: JSON.stringify(products)
        }
        setOrder(data).then((result) => {
            if (result.data.status) {
                toast.dismiss();
                toast.success(result.data.message);
                dispatch(removeAll())
                navigate("/profile", { replace: true })
            }
            else {
                toast.dismiss();
                toast.error(result.data.message);
            }
        })
    }

    return (
        <div>
            <div className='row m-0'>
                <div className='col-md-6 check-info'>
                    <h1 className='text-center mb-4'>Zillionaire Jewels</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-12 mb-3'>
                                    <input type='text' name='email' placeholder='Email' onChange={handleChange} className='form-control' />
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} className='form-control' />
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <input type='text' name="lastName" placeholder='Last Name' onChange={handleChange} className='form-control' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type='text' name='mobileNumber' placeholder='Phone Number' onChange={handleChange} className='form-control' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type='text' name='address' placeholder='Address' onChange={handleChange} className='form-control' />
                                </div>
                                <div className='col-12 mb-3'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-md-6 check-cart'>
                    <div className='check-cart-inner'>
                        {products?.map((list) => {
                            return (
                                <div className='d-flex mb-3 check-cart-div'>
                                    <div className='cart-img'>
                                        <img src={list.images} alt='' className='img-fluid' />
                                        <span>{list.quantity}</span></div>
                                    <div className='cart-h d-flex check-cart-item'>
                                        <div>
                                            <h6>{list.title}</h6>
                                            <p>{list.finishing} / {list.size}</p>
                                        </div>
                                        <div className=' cart-des'>
                                            <div className='price-box'>
                                                <span className=""> ${list.quantity * list.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='check-sub-total mt-2'>
                        <div className='sub-total'>
                            <p>
                                Subtotal
                            </p>
                            <p>
                                ${totalamount}
                            </p>
                        </div>
                    </div>
                    <div className='check-sub-total mt-2'>
                        <div className='sub-total'>
                            <p>
                                Total
                            </p>
                            <p>
                                ${grandtotal}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
