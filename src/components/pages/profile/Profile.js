import React, { useEffect, useState } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetUserDetailQuery } from '../../../redux/userApi'
import { useAuth } from '../../../AuthContext'
import { useNavigate } from 'react-router-dom'
import { useGetOrderQuery } from '../../../redux/orderApi'
import ChangePasswordModal from '../../partials/ChangePasswordModal'
import OrderViewModal from '../../partials/OrderViewModal'

function Profile() {
    const navigate = useNavigate()
    const { authenticated } = useAuth();
    const { data } = useGetUserDetailQuery()
    const { data: orderHistory } = useGetOrderQuery()
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10)
    const [currectRecord,setCurrectRecord]=useState({})
    const [showOrder,setShowOrder]=useState(false)

    useEffect(() => {
        if (!authenticated) {
            navigate("/login")
        }
    }, [authenticated])

    const handleShow = (id) => {
        setShow(true);

    };

    // Calculate the total number of pages
    const totalPages = Math.ceil(orderHistory?.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the data for the current page
    const currentPageData = orderHistory?.slice(startIndex, endIndex);

    // Generate array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleShowOrder=(record)=>{
        setCurrectRecord(record)
        setShowOrder(true)
    }

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
                                <div><button className='btn btn-prrimary w-100' onClick={() => handleShow()}>Change Password</button></div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9 ps-md-4 mt-4 mt-md-0">
                            <h4 className="mb-3">Order History</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr><th>SR. NO.</th>
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
                                            currentPageData?.map((list,index) => {
                                                return (
                                                    <tr key={list.id}>
                                                        <td>{index+1}</td>
                                                        <td>{list.order_id}</td>
                                                        <td>{list.first_name}</td>
                                                        <td>{list.last_name}</td>
                                                        <td>{list.email}</td>
                                                        <td>{list.total}</td>
                                                        <td>{list.grand_total}</td>
                                                        <td>{list.status}</td>
                                                        <td><button className='btn btn-primary' onClick={()=>{
                    handleShowOrder(list)
                }}>View</button></td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {/* Previous page button */}
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            aria-label="Previous"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>

                                    {/* Page numbers */}
                                    {pageNumbers.map((number) => (
                                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                            <button
                                                className="page-link"
                                               
                                                onClick={() => handlePageChange(number)}
                                            >
                                                {number}
                                            </button>
                                        </li>
                                    ))}

                                    {/* Next page button */}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                           
                                            aria-label="Next"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ChangePasswordModal show={show} setShow={setShow} />
            <OrderViewModal setShowOrder={setShowOrder} showOrder={showOrder} currentRecord={currectRecord}/>
        </>
    )
}

export default Profile
