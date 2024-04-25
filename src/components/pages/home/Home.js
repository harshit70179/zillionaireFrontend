import React from 'react'
import TopBanner from './TopBanner'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import ProductSlider from './ProductSlider'
import Explore from './Explore'
import Testimonial from './Testimonial'
import { useGetLowerBannerQuery, useGetMiddleBannerQuery, useGetTopBannerQuery } from '../../../redux/bannerApi'

function Home() {
    const {data:topBanner}=useGetTopBannerQuery()
    const {data:middleBanner}=useGetMiddleBannerQuery()
    const {data:lowerBanner}=useGetLowerBannerQuery()
    return (
        <>
            <Header />
            <TopBanner topBanner={topBanner}/>
            <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">Most Loved Styles</h2>
                    <ProductSlider />
                </div>
            </section>
            <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">Pre-Order: Crystal Fusion at 15% off</h2>
                    <ProductSlider />
                </div>
            </section>
            {middleBanner?.length>0 && <div className="banners">
                <div className="container">
                    <img src={middleBanner[0]?.image} className="img-fluid" alt="" />
                </div>
            </div> }
           
            <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">Just Launched</h2>
                    <ProductSlider />
                </div>
            </section>
            <Explore />
            <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">Hottest Stars: Zodiac Collection</h2>
                    <ProductSlider />
                </div>
            </section>
            {lowerBanner?.length>0 && <div className="container mb-md-5">
                <img src={lowerBanner[0]?.image} className="img-fluid" alt=''/>
            </div> }
            
            <Testimonial/>
            <Footer />
        </>
    )
}

export default Home
