import React, { useEffect, useState } from 'react'
import Faq from 'react-faq-component';
import { useGetFaqQuery } from '../../../redux/sitepolicyApi'
import Footer from '../../widgets/Footer';
import Header from '../../widgets/Header';

function Faqs() {
    const { data: record } = useGetFaqQuery()
    const [data, setData] = useState({ rows: [] })
    useEffect(() => {
        if (record) {
            setData({ ...data, ["rows"]: record })
        }
    }, [record])

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
            <div className="breadcrumb-area bg_light pt-5 pb-4 text-center">
                <div className="container">
                    <h3 className="mb-4">Frequently Asked Questions</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <Faq data={data}
                        styles={{
                            bgColor: "white",
                            titleTextColor: "#48482a",
                            rowTitleColor: "#78789a",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#48484a",
                            rowContentTextSize: '16px',
                            rowContentPaddingTop: '10px',
                            rowContentPaddingBottom: '10px',
                            rowContentPaddingLeft: '50px',
                            rowContentPaddingRight: '150px',
                            arrowColor: "black",
                        }} />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Faqs
