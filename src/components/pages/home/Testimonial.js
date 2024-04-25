import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Testimonial() {
    return (
        <>
            <section id="clients" className="clients text-center">
                <div className="container">
                    <div className="section-title">
                        <h3 className="hadding">Testimonials</h3>
                        <p>Magnam dolores commodi suscipit. </p>
                    </div>
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            <Carousel autoPlay={true} infiniteLoop={true} verticalSwipe='vertical' stopOnHover={false} showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
                                <div className="carousel-item active">
                                    <img src="/assets/img/testimonial-2.webp" alt="testimonial" className="d-block" />
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="t_name">New York</div>
                                    <span className="mt-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                                <div className="carousel-item active">
                                    <img src="/assets/img/testimonial-2.webp" alt="testimonial" className="d-block" />
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="t_name">New York</div>
                                    <span className="mt-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                                <div className="carousel-item active">
                                    <img src="/assets/img/testimonial-2.webp" alt="testimonial" className="d-block" />
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="t_name">New York</div>
                                    <span className="mt-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                                <div className="carousel-item active">
                                    <img src="/assets/img/testimonial-2.webp" alt="testimonial" className="d-block" />
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="t_name">New York</div>
                                    <span className="mt-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                                <div className="carousel-item active">
                                    <img src="/assets/img/testimonial-2.webp" alt="testimonial" className="d-block" />
                                    <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                    <div className="t_name">New York</div>
                                    <span className="mt-2">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
