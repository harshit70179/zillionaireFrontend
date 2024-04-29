import React from 'react'
import TopBanner from './TopBanner'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import ProductSlider from './ProductSlider'
import Explore from './Explore'
import Testimonial from './Testimonial'
import { useGetLowerBannerQuery, useGetMiddleBannerQuery, useGetTopBannerQuery } from '../../../redux/bannerApi'
import { useGetHomeProductQuery } from '../../../redux/headerApi'
import { useAuth } from '../../../AuthContext'

function Home() {
    const { data: homeProduct } = useGetHomeProductQuery()
    const { data: topBanner } = useGetTopBannerQuery()
    const { data: middleBanner } = useGetMiddleBannerQuery()
    const { data: lowerBanner } = useGetLowerBannerQuery()

    return (
        <>
            <Header />
            <TopBanner topBanner={topBanner} />
            {homeProduct && homeProduct[0] ? <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">{homeProduct[0].title}</h2>
                    <ProductSlider products={homeProduct[0].products}/>
                </div>
            </section> : ""}
            {homeProduct && homeProduct[1] ? <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">{homeProduct[1].title}</h2>
                    <ProductSlider products={homeProduct[1].products} />
                </div>
            </section> : ""}
            {middleBanner?.length > 0 && <div className="banners">
                <div className="container">
                    <img src={middleBanner[0]?.image} className="img-fluid" alt="" />
                </div>
            </div>}

            {homeProduct && homeProduct[2] ? <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">{homeProduct[2].title}</h2>
                    <ProductSlider products={homeProduct[2].products} />
                </div>
            </section> : ""}
            <Explore />
            {homeProduct && homeProduct[3] ? <section className="home_product_item">
                <div className="container">
                    <h2 className="hadding">{homeProduct[3].title}</h2>
                    <ProductSlider products={homeProduct[3].products} />
                </div>
            </section> : ""}
            {lowerBanner?.length > 0 && <div className="container mb-md-5">
                <img src={lowerBanner[0]?.image} className="img-fluid" alt='' />
            </div>}
            {homeProduct && homeProduct.length > 3 ?
                homeProduct.slice(4, 7)?.map((list) => {
                    return (
                        <section className="home_product_item">
                            <div className="container">
                                <h2 className="hadding">{list.title}</h2>
                                <ProductSlider products={list.products} />
                            </div>
                        </section>
                    )
                }) : ""}
            <Testimonial />
            <Footer />
        </>
    )
}

export default Home
