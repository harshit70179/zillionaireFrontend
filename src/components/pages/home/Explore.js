import React from 'react'
import { Link } from 'react-router-dom'

function Explore() {
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-6 mb-4">
                            <div className="small_banner position-relative">
                                <img src="/assets/img/smallbanner1.jpg" className="img-fluid" alt='' />
                                <Link to="/" className="btn">
                                    EXPLORE 380+ STYLES
                                </Link>
                            </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                            <div className="small_banner position-relative">
                                <img src="/assets/img/smallbanner2.jpg" className="img-fluid" alt='' />
                                <Link to="/" className="btn">
                                    EXPLORE 380+ STYLES
                                </Link>
                            </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                            <div className="small_banner position-relative">
                                <img src="/assets/img/smallbanner2.jpg" className="img-fluid" alt='' />
                                <Link to="/" className="btn">
                                    EXPLORE 380+ STYLES
                                </Link>
                            </div>
                        </div>
                        <div className=" col-md-6 mb-4">
                            <div className="small_banner position-relative">
                                <img src="/assets/img/smallbanner1.jpg" className="img-fluid" alt='' />
                                <Link to="/" className="btn">
                                    EXPLORE 380+ STYLES
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore
