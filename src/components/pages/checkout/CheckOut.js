import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useSetOrderMutation } from '../../../redux/orderApi';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { removeAll } from '../../../redux/cartSlice';
import { checkoutValid } from '../../validations/CheckoutValid';
import { useAuth } from '../../../AuthContext';
import { useGetUserDetailQuery } from '../../../redux/userApi'

function CheckOut() {
    const navigate = useNavigate()
    const { data } = useGetUserDetailQuery()
    const { authenticated } = useAuth();
    const dispatch = useDispatch();
    const [setOrder] = useSetOrderMutation()
    const [disable, setDisable] = useState(false);
    const { item: products, totalamount, grandtotal, count } = useSelector((state) => state.cart);
    const [infoField, setInfoField] = useState({ email: "", firstName: "", lastName: "", mobileNumber: "", address: "",giftNote:"" })
    const [infoFieldErr, setInfoFieldErr] = useState({ email: "", firstName: "", lastName: "", mobileNumber: "", address: "" })
    const [giftSelect,setGiftSelect]=useState(false)

    useEffect(()=>{
        if(data){
            setInfoField({...infoField,["email"]:data?.email,["firstName"]:data?.first_name,["lastName"]:data?.last_name})
        }
    },[data])

    useEffect(() => {
        if (products.length === 0 || !authenticated) {
            navigate("/")
        }
    }, [products])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInfoField({ ...infoField, [name]: value })
        let checkInfo = checkoutValid(name, value);
        setInfoFieldErr({ ...infoFieldErr, [name]: checkInfo });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDisable(true);

        setTimeout(() => {
            setDisable(false);
        }, 3000);
       
        for (let key in infoField) {
            let checkInfo = checkoutValid(key, infoField[key]);
            setInfoFieldErr({ ...infoFieldErr, [key]: checkInfo });
            if (checkInfo !== "") {
                return false;
            }
        }
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
            product_items: JSON.stringify(products),
            total_item:count,
            gift_status:giftSelect?'1':'0',
            gift_note:infoField.giftNote
        }
        setOrder(data).then((result) => {
            if (result.data.status) {
                toast.dismiss();
                toast.success(result.data.message);
                dispatch(removeAll())
                setTimeout(() => {
                    navigate("/profile", { replace: true })
                }, 2000);
            }
            else {
                toast.dismiss();
                toast.error(result.data.message);
            }
        })
    }

    const handleGiftSelect=()=>{
        setGiftSelect(!giftSelect)
        if(!giftSelect){
            setInfoField({...infoField,["giftNote"]:""})
        }
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
                                    <h6 className='mb-3'><b>CONTACT</b></h6>
                                    <input type='text' name='email' placeholder='Email *' onChange={handleChange} className='form-control' value={infoField.email} readOnly/>
                                    <span className='text-danger'>{infoFieldErr.email}</span>
                                </div>
                                <div className='col-12'>
                                    <h6 className='mb-3 mt-4'><b>SHIPPING ADDRESS</b></h6>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <input type='text' name='firstName' placeholder='First name *' onChange={handleChange} className='form-control' value={infoField.firstName}/>
                                    <span className='text-danger'>{infoFieldErr.firstName}</span>
                                </div>
                                <div className='col-md-6 mb-3'>
                                    <input type='text' name="lastName" placeholder='Last name *' onChange={handleChange} className='form-control' value={infoField.lastName}/>
                                    <span className='text-danger'>{infoFieldErr.lastName}</span>
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type='text' name='mobileNumber' placeholder='Phone number *' onChange={handleChange} className='form-control' value={infoField.mobileNumber}/>
                                    <span className='text-danger'>{infoFieldErr.mobileNumber}</span>
                                </div>
                                <div className='col-12 mb-3'>
                                    <input type='text' name='address' placeholder='Address *' onChange={handleChange} className='form-control' value={infoField.address}/>
                                    <span className='text-danger'>{infoFieldErr.address}</span>
                                </div>
                                <div className='col-12'>
                                     <div className='d-flex gift'>
                                        <img src="/assets/img/gift.jpg" alt=''/>
                                        <div className='title'>
                                            <h4>Ordering a gift?</h4>
                                            <p>Get your item in a gift bag</p>
                                        </div>
                                        <div className='text-end w-50 gift-btn'>
                                            <button onClick={handleGiftSelect} type='button'>{giftSelect?"Unselect":"Select"}</button>
                                        </div>
                                     </div>
                                </div>
                                {giftSelect?<div className='col-12 mb-3 mt-3'>
                                    <input type='text' name='giftNote' placeholder='Gift Note' onChange={handleChange} className='form-control' value={infoField.gitNote}/>
                                    
                                </div>:""}
                                <div className='col-md-6 mb-3 mt-2 d-flex align-items-center'>
                                    <Link to="/cart"> <i class="bi bi-arrow-left-short"></i> RETURN TO CART</Link>
                                </div>
                                <div className='col-md-6 mb-3 mt-2 checkout-submit'>
                                    <button type='submit' className='btn btn-primary w-100' disabled={disable}>SUBMIT</button>
                                </div>
                            </div>
                        </form>
                        <hr/>
                        <div className='mt-3 checkout-footer-link'>
                          <Link to="/return-policy" className='ms-1'>Return Policy</Link>
                          <Link to="/privacy-policy" className='ms-3'>Privacy Policy</Link>
                          <Link to="/tac" className='ms-3'>Term and Conditions</Link>
                        </div>
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
                                                {/* <span className=""> ${list.quantity * list.price}</span> */}
                                                <span className="price-regular">${list.save>0?(list.quantity *(list.price)-((list.price*list.save)/100)):list.quantity *list.price}</span>{list.save>0?<del>${list.quantity *list.price}</del>:""}
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
