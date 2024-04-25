import React from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'

function Profile() {
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
                                <div className="d-flex mb-3">First Name: <span className="ms-auto">Ritu</span> </div>
                                <div className="d-flex mb-3">Last Name: <span className="ms-auto">Sharma</span> </div>
                                <div className="d-flex mb-3">Email: <span className="ms-auto">Ritu@gmail.com</span> </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-9 ps-md-4">
                            <h4 className="mb-3">Order History</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John</td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td>Mary</td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td>July</td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
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
