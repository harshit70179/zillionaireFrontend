import React, { useEffect } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetSitePolicyQuery } from '../../../redux/sitepolicyApi'

function Tac() {
    const { data } = useGetSitePolicyQuery()
    useEffect(()=>{
        scrollTop()
    },[])
    const scrollTop=()=>{
 
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
                    <h3 className="mb-4">Term And Conditions</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div
                        dangerouslySetInnerHTML={{ __html: data && data[0]?.TAC }}
                    />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Tac
