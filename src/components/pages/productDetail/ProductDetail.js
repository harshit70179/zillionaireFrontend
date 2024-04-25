import React, { useState,useRef,useEffect } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function ProductDetail() {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const thumbsSwiperRef = useRef(null);
    // const setThumbsSwiperRef = (swiper) => {

    //     thumbsSwiperRef.current = swiper;
    // };
    // console.log(thumbsSwiperRef.current,"thumbsSwiperRef.current")

    // useEffect(() => {
    //     if (!thumbsSwiper) {
    //         // Access the swiper instance using the ref
    //         const swiper = thumbsSwiperRef.current;
    //         // Set the swiper instance if it exists
    //         if (swiper) {
    //             setThumbsSwiper(swiper);
    //         }
    //     }
    // }, [thumbsSwiper]);

    console.log(thumbsSwiper,"thumbsSwiper")
    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb m-0 d-flex align-items-center">
                                        <li className="breadcrumb-item"><a href="index.html"><i className="bi bi-house"></i></a></li>

                                        <li className="breadcrumb-item active" aria-current="page">product details</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className=" pt-4 pt-md-5 ">
                <div className="container">
                    <div className="row">
                        {/* <!-- product details wrapper start --> */}
                        <div className="col-lg-12 order-1 order-lg-2">
                            {/* <!-- product details inner end --> */}
                            <div className="product-details-inner">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }}
                                            loop={true}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                                            modules={[ Navigation,Thumbs]}
                                            // className="mySwiper2"
                                            // onSwiper={(swiper) => setThumbsSwiper(swiper)} 
                                        >
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt=''/>
                                            </SwiperSlide>
                                        </Swiper>
                                        <Swiper
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            // freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[Navigation,Thumbs]}
                                            // className="mySwiper"
                                            onSwiper={setThumbsSwiper}
                                        >
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='' />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt=''/>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt=''/>
                                            </SwiperSlide>
                                        </Swiper>

                                    </div>
                                    <div className="col-lg-7 ps-md-5">
                                        <div className="product-details-des">
                                            <div className="manufacturer-name">
                                                <a href="product-details.html">HasTech</a>
                                            </div>
                                            <h3 className="product-name">Handmade Golden Necklace Full Family Package</h3>
                                            <div className="ratings d-flex  align-items-center mt-3 mb-3">
                                                <span className="me-2">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                                <Link to="/" className="text-m">22 Reviews</Link>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-regular">$70.00</span>
                                                <span className="price-old"><del>$90.00</del></span>
                                            </div>
                                            <h5 className="offer-text mt-3"><strong>Hurry up</strong>! offer ends in:</h5>

                                            <div className="availability">
                                                <i className="fa fa-check-circle"></i>
                                                <span>200 in stock</span>
                                            </div>
                                            <p className="pro-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac
                                                habitasse platea dictumst.</p>
                                            <div className="quantity-cart-box d-flex align-items-center">
                                                <span className="option-title">qty:</span>
                                                <div className="quantity">
                                                    <div className="pro-qty"><span className="dec qtybtn">-</span><input type="text" value="1" /><span className="inc qtybtn" >+</span></div>
                                                </div>
                                                <div className="action_link">
                                                    <button className="btn btn-cart2">Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="pro-size">
                                                <span className="option-title">size :</span>
                                                <select className="nice-select"  >
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div>
                                            <div className="color-option">
                                                <span className="option-title">color :</span>
                                                <ul className="color-categories mb-0">
                                                    <li>
                                                        <Link className="c-lightblue" to="/" title="LightSteelblue"></Link>
                                                    </li>
                                                    <li>
                                                        <Link className="c-darktan" to="/" title="Darktan"></Link>
                                                    </li>
                                                    <li>
                                                        <Link className="c-grey" to="/" title="Grey"></Link>
                                                    </li>
                                                    <li>
                                                        <Link className="c-brown" to="/" title="Brown"></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product details inner end --> */}

                            {/* <!-- product details reviews start --> */}
                            <div className="product-details-reviews section-padding pb-0 mt-4 mt-md-5">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product-review-info">
                                            <ul className="nav nav-tabs mb-4 review-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-bs-toggle="tab" href="#tab_one">Description</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#tab_two">Information</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content reviews-tab">
                                                <div className=" tab-pane active" id="tab_one">
                                                    <div className="tab-one">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                                            fringilla augue nec est tristique auctor. Ipsum metus feugiat
                                                            sem, quis fermentum turpis eros eget velit. Donec ac tempus
                                                            ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                                                            sagittis vulputate, sapien libero hendrerit est, sed commodo
                                                            augue nisi non neque.Cras neque metus, consequat et blandit et,
                                                            luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
                                                            ligula euismod eget. Pellentesque habitant morbi tristique
                                                            senectus et netus et malesuada fames ac turpis egestas. Nam
                                                            erat mi, rutrum at sollicitudin rhoncus</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tab_two">
                                                    <table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>color</td>
                                                                <td>black, blue, red</td>
                                                            </tr>
                                                            <tr>
                                                                <td>size</td>
                                                                <td>L, M, S</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product details reviews end --> */}
                        </div>
                        {/* <!-- product details wrapper end --> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductDetail
