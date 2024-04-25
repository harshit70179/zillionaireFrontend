import React from 'react'
import { Link } from 'react-router-dom'

function FooterShip() {
    return (
        <div className="footer_top bg_light pt-3 pb-3">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-4 ">
                        <Link to="/" className="footer_bar_item d-flex">
                            <div className="footer-bar_icon pe-3">
                                <i className="bi bi-truck"></i>
                            </div>
                            <div className="footer-bar__text">
                                Free Shipping On<br />All US Orders Over $250
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 ">
                        <Link to="/" className="footer_bar_item d-flex">
                            <div className="footer-bar_icon pe-3">
                                <i className="bi bi-gem"></i>
                            </div>
                            <div className="footer-bar__text">
                                Over 1.8 Million followers<br />&amp; 22,700 5-Star Reviews
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 ">
                        <Link to="/" className="footer_bar_item d-flex">
                            <div className="footer-bar_icon pe-3">
                                <i className="bi bi-star"></i>
                            </div>
                            <div className="footer-bar__text">
                                GIA &amp; IGI Lab Approved <br />Gem Authenticity
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterShip
