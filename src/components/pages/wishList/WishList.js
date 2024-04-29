import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetWishListQuery } from '../../../redux/userApi'
import { useAuth } from '../../../AuthContext'

function WishList() {
    const { data,refetch } = useGetWishListQuery()
    const { authenticated } = useAuth();
    useEffect(()=>{
        if(authenticated){
            refetch()
        }
    },[authenticated])
    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light pt-5 pb-5 text-center">
                <div className="container">
                    <h3 className="mb-4">My WishList</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    {authenticated ? <div className="row">
                        {
                            data && data?.map((list) => {
                                let image = JSON.parse(list.images)
                                let price = JSON.parse(list.price)
                                return (
                                    <div className="col-md-4 mb-2" key={list.id}>
                                        <div className="shadow1">
                                            <div className="img_item  ">
                                                <Link to={`/product-detail/${list.id}`} className='heart-img'>
                                                    <img src={image[0]} className="img-fluid" alt="" />
                                                </Link>
                                            </div>
                                            <div className="product-grid_item p-3 ">
                                                <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                                                <div className="product-grid-item__title"><a href="detail-page.html">{list.title}</a></div>
                                                <span className="product_item_price money">${price[0]?.price} USD</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> : <div className='row'>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-4'>
                            <p>Your wishlist has been temporarily saved.<Link to="/register" className='text-d'> Create an account</Link> or <Link to="/login" className='text-d'> sign</Link>  in to save it permanently.</p>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default WishList
