import React from 'react'
import { Link } from 'react-router-dom'
import FooterShip from './FooterShip'
import { useGetFooterCollectionQuery, useGetSocialMediaQuery } from '../../redux/sitepolicyApi'

function Footer() {
    const {data}=useGetFooterCollectionQuery()
    const {data:social}=useGetSocialMediaQuery()
    return (
        <>
        <FooterShip/>
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <img src="/assets/img/logo.png" className="img-fluid" alt=''/>
                            {/* <p className="mt-5">
                                A108 Adam Street
                                New York, NY 535022
                                United States
                            </p> */}
                            <div className="payment_methods mt-3">
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p1.png" alt=''/>
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p2.png" alt=''/>
                                <img className=" ls-is-cached lazyloaded" src="/assets/img/p3.png" alt=''/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>LET US HELP YOU</h4>
                            <ul>
                                <li> <Link to="/faq">FAQ</Link></li>
                                <li> <Link to="/shipping">SHIPPING</Link></li>
                                <li> <Link to="/return-policy">RETURNS</Link></li>
                                <li> <Link to="/privacy-policy">PRIVACY POLICY</Link></li>
                                <li> <Link to="/tac">TERMS AND CONDITIONS</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>COLLECTIONS</h4>
                            <ul>
                            {data && data?.map((list)=>{
                                    return (
                                        <li key={list.id}> <Link to={`/sub-category-products/${list.id}/${list.name}`}>{list.name}</Link></li>
                                    )
                                })}
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
                                {social?.map((list)=>{
                                    return (
                                          <Link to={list.url} className="twitter" key={list.id}><i className={list.title}></i></Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg_light ">
                <div className="container p-2 ">
                    <div className="copyright ttu">
                        <Link to="/privacy-policy">Privacy Policy</Link> © 2024 zillionaire jewels
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
