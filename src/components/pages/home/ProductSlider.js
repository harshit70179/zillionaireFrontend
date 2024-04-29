import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../AuthContext';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function ProductSlider({ products }) {
    const {wishList,handleWishlist,authenticated } = useAuth();
    const handleClick=(id)=>{
        handleWishlist(id)
    }
    return (
        <Carousel responsive={responsive} itemClass="carousel-item-padding-40-px" autoPlay={true} infinite={true} autoPlaySpeed={3000} keyBoardControl={true}>
            {
                products && products?.map((list) => {
                    let image = JSON.parse(list.images)
                    let price = JSON.parse(list.price)
                    return (
                        <div className='p-3' key={list.id}>
                            <div className="img_item mb-3 heart-img">
                                <Link to={`/product-detail/${list.id}`}>
                                    <Link to={`/product-detail/${list.id}`}>
                                        <img src={image[0]} className="img-fluid" alt="" />
                                    </Link>
                                </Link>
                                        {authenticated && (wishList.includes(list.id)?<i class="bi bi-suit-heart-fill" onClick={()=>{handleClick(list.id)}}></i>:<i className='bi bi-heart' onClick={()=>{handleClick(list.id)}}></i>)}
                            </div>
                            <div className="product-grid_item">
                                <span className="product-grid-item__vendor" >{list?.sub_category_name ? list?.sub_category_name : list?.category_name ? list?.category_name : list?.main_category_name}</span>
                                <div className="product-grid-item__title"><Link to={`/product-detail/${list.id}`}>{list.title}</Link></div>
                            </div>
                            <div className="ratings d-flex  align-items-center mt-3 mb-3" >
                                <span className="me-2">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </span>
                                <Link to="/" className="text-m" >22 Reviews</Link>
                            </div>
                            <span className="product_item_price money">${price[0]?.price} USD</span>
                        </div>
                    )
                })
            }

            {/* <div className='p-3'>
                <div className="img_item mb-3">
                    <Link to="/">
                        <Link to="/">
                            <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                        </Link>
                    </Link>
                </div>
                <div className="product-grid_item">
                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                    <div className="product-grid-item__title">Crush On You Ring</div>
                </div>
                <div className="ratings d-flex  align-items-center mt-3 mb-3" >
                    <span className="me-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </span>
                    <Link to="/" className="text-m" >22 Reviews</Link>
                </div>
                <span className="product_item_price money">$100 USD</span>
            </div>
            <div className='p-3'>
                <div className="img_item mb-3">
                    <Link to="/">
                        <Link to="/">
                            <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                        </Link>
                    </Link>
                </div>
                <div className="product-grid_item">
                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                    <div className="product-grid-item__title">Crush On You Ring</div>
                </div>
                <div className="ratings d-flex  align-items-center mt-3 mb-3" >
                    <span className="me-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </span>
                    <Link to="/" className="text-m" >22 Reviews</Link>
                </div>
                <span className="product_item_price money">$100 USD</span>
            </div>
            <div className='p-3'>
                <div className="img_item mb-3">
                    <Link to="/">
                        <Link to="/">
                            <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                        </Link>
                    </Link>
                </div>
                <div className="product-grid_item">
                    <span className="product-grid-item__vendor">Ruby &amp; Garnet</span>
                    <div className="product-grid-item__title">Crush On You Ring</div>
                </div>
                <div className="ratings d-flex  align-items-center mt-3 mb-3" >
                    <span className="me-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </span>
                    <Link to="/" className="text-m" >22 Reviews</Link>
                </div>
                <span className="product_item_price money">$100 USD</span>
            </div>
            <div className='p-3'>
                <div className="img_item mb-3">
                    <Link to="/">
                        <Link to="/">
                            <img src="/assets/img/i1.jpg" className="img-fluid" alt="" />
                        </Link>
                    </Link>
                </div>
                <div className="product-grid_item">
                    <span className="product-grid-item__vendor">Ruby &amp; Garnet5</span>
                    <div className="product-grid-item__title">Crush On You Ring</div>
                </div>
                <div className="ratings d-flex  align-items-center mt-3 mb-3" >
                    <span className="me-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </span>
                    <Link to="/" className="text-m" >22 Reviews</Link>
                </div>
                <span className="product_item_price money">$100 USD</span>
            </div> */}
        </Carousel>

    )
}

export default ProductSlider
