import React, { useEffect } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetUserDetailQuery } from '../../../redux/userApi'
import { useAuth } from '../../../AuthContext'
import { useNavigate } from 'react-router-dom'
import { useGetOrderQuery } from '../../../redux/orderApi'

function Profile() {
    const navigate=useNavigate()
    const { authenticated } = useAuth();
    const {data}=useGetUserDetailQuery()
    const {data:orderHistory}=useGetOrderQuery()

   useEffect(()=>{
     if(!authenticated){
        navigate("/login")
     }
   },[authenticated])

    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light pt-5 pb-4 text-center">
                <div className="container">
                    <h3 className="mb-4">Profile</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-3">
                            <div className="profile_box bg_light p-3 p-md-4">
                                <img className="user_photo mb-4" src="assets/img/login_bg.jpg" alt="user" />
                                <div className="d-flex mb-3">First Name: <span className="ms-auto">{data && data.first_name}</span> </div>
                                <div className="d-flex mb-3">Last Name: <span className="ms-auto">{data && data.last_name}</span> </div>
                                <div className="d-flex mb-3">Email: <span className="ms-auto">{data && data.email}</span> </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9 ps-md-4">
                            <h4 className="mb-3">Order History</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Order Id</th>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                            <th>Subtotal</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orderHistory?.map((list)=>{
                                                return (
                                                    <tr key={list.id}>
                                                         <td>{list.order_id}</td>
                                                    <td>{list.first_name}</td>
                                                    <td>{list.last_name}</td>
                                                    <td>{list.email}</td>
                                                    <td>{list.total}</td>
                                                    <td>{list.grand_total}</td>
                                                    <td>{list.status}</td>
                                                    <td><button className='btn btn-primary'>View</button></td>
                                                </tr>
                                                )
                                            })
                                        }
                                       
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Profile
