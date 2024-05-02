import React, { useEffect } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetSitePolicyQuery } from '../../../redux/sitepolicyApi'

function ReturnPolicy() {
    const { data } = useGetSitePolicyQuery()
    useEffect(() => {
        scrollTop()
    }, [])
    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light pt-5 pb-5 text-center">
                <div className="container">
                    <h3 className="mb-4">Return Policy</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div
                        dangerouslySetInnerHTML={{ __html: data && data[0]?.return_policy }}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ReturnPolicy
