import React from 'react'
import { Link } from 'react-router-dom'
import FooterShip from './FooterShip'

function Footer() {
    return (
        <>
        <FooterShip/>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <img src="/assets/img/logo.png" className="img-fluid" alt=''/>
                            <p className="mt-5">
                                A108 Adam Street
                                New York, NY 535022
                                United States
                            </p>
                            <div className="payment_methods">
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p1.png" alt=''/>
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p2.png" alt=''/>
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p3.png" alt=''/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>LET US HELP YOU</h4>
                            <ul>
                                <li> <Link to="/">FAQ</Link></li>
                                <li> <Link to="/shipping">SHIPPING</Link></li>
                                <li> <Link to="/return-policy">RETURNS</Link></li>
                                <li> <Link to="/tac">TERMS AND CONDITIONS</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>COLLECTIONS</h4>
                            <ul>
                                <li> <Link to="/"> SHOP ALL</Link></li>
                                <li> <Link to="/"> RINGS</Link></li>
                                <li> <Link to="/"> BETTER TOGETHER BUNDLES</Link></li>
                                <li> <Link to="/">MOONSTONE JEWELRY </Link></li>
                                <li> <Link to="/"> NECKLACES</Link></li>
                                <li> <Link to="/"> EARRINGS</Link></li>
                                <li> <Link to="/">SHOP OUR INSTAGRAM </Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-info">
                            <h4>Our Newsletter</h4>
                            <div className="footer-newsletter">
                                <form action="" method="post">
                                    <input type="email" name="email" /><button type="submit" className="btn"><i className="bi bi-send"></i></button>
                                </form>
                            </div>
                            <p className="mt-3">
                                <strong>Contact Us </strong> info@example.com
                            </p>
                            <div className="social-links mt-4">
                                <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
                                <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
                                <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
                                <Link to="/" className="google-plus"><i className="bi bi-skype"></i></Link>
                                <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_light ">
                <div className="container p-2 ">
                    <div className="copyright ttu">
                        © 2024 zillionairejewels
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
