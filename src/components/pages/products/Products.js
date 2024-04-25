import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'

function Products() {
    return (
        <>
        <Header/>
            <div className="breadcrumb-area bg_light pt-5 pb-4 text-center">
                <div className="container">
                    <h3 className="mb-4">Gemstone Rings</h3>
                    <b>RING IN THE REAL GEMSTONE ENERGY</b>
                    <p>Every piece tells a unique story and every stack is a celebration of you. </p>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link to="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link href="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link to="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link to="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link to="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="shadow1">
                                <div className="img_item  ">
                                    <Link to="/">
                                        <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                                    </Link>
                                </div>
                                <div className="product-grid_item p-3 ">
                                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                    <div className="product-grid-item__title"><a href="detail-page.html">Crush On You Ring</a></div>
                                    <span className="product_item_price money">$100 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Products
