import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetProductsMutation } from '../../../redux/productsApi'
import { useAuth } from '../../../AuthContext'

function ExploreProduct() {
    const { main_category_id } = useParams()
    const [getProducts, { data }] = useGetProductsMutation()
    const { wishList, handleWishlist, authenticated } = useAuth();
    const handleClick = (id) => {
        handleWishlist(id)
    }

    useEffect(() => {
        if (main_category_id) {
            const sendData = {
                main_category_id
            }
            getProducts(sendData)
        }
    }, [main_category_id])

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
                    <h3 className="mb-4">Explore</h3>
                    {/* <b>RING IN THE REAL GEMSTONE ENERGY</b> */}
                    <p>Every piece tells a unique story and every stack is a celebration of you. </p>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div className="row">
                        {
                            data?.map((list) => {
                                let image = JSON.parse(list.images)
                                let price = JSON.parse(list.price)
                                let discount=price[0]?.save>0?(price[0].price)-((price[0].price*price[0].save)/100):price[0].price
                                return (
                                    <div className="col-md-4 mb-2" key={list.id}>
                                        <div className="shadow1">
                                            <div className="img_item  heart-img">
                                            {price[0]?.save>0?<span className='s_offer'>{price[0]?.save}% OFF</span>:""}
                                                <Link to={`/product-detail/${list.id}`} className=''>
                                                    <img src={image[0]} className="img-fluid" alt="" />
                                                </Link>
                                                {authenticated && (wishList.includes(list.id) ? <i class="bi bi-suit-heart-fill" onClick={() => { handleClick(list.id) }}></i> : <i className='bi bi-heart' onClick={() => { handleClick(list.id) }}></i>)}
                                            </div>
                                            <div className="product-grid_item p-3 ">
                                                <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                                <div className="product-grid-item__title"><a href="detail-page.html">{list.title}</a></div>
                                                <span className="product_item_price money">${discount} USD {price[0]?.save>0?<del>${price[0]?.price}</del>:""}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ExploreProduct
