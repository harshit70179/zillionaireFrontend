import React, { useState, useEffect } from 'react'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Autoplay, Zoom } from 'swiper/modules';
import { useGetProductsByIdMutation } from '../../../redux/productsApi';
import { add, total } from '../../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function ProductDetail() {
    const { id } = useParams()
    const [getProductsById, { data }] = useGetProductsByIdMutation()
    const dispatch = useDispatch();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [images, setImages] = useState([])
    const [sizeArr, setSizeArr] = useState([])
    const [priceArr, setPriceArr] = useState([])
    const [finishingCategoryArr, setFinishingCategoryArr] = useState([])
    const [size, setSize] = useState("")
    const [finishing, setzfinishing] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity,setQuantity]=useState(1)

    useEffect(() => {
        if (id) {
            getProductsById({ id })
        }
    }, [id])

    useEffect(() => {
        if (data) {
            setImages(JSON.parse(data[0]?.images))
            let price = JSON.parse(data[0]?.price)
            let size = price?.map((list) => list.size)
            let finishing = price?.map((list) => list.finishingCategory)
            if(size[0]){
                setSizeArr(size)
            }
            if(finishing[0]){
                setFinishingCategoryArr(finishing)
            }
            setSize(size[0])
            setzfinishing(finishing[0])
            setPriceArr(price)
        }
    }, [data])

    useEffect(() => {
        if (size && finishing) {
            let filterPrice = priceArr.filter((list) => { return list.finishingCategory === finishing && list.size === size })
            setPrice(parseFloat(filterPrice[0]?.price))
        }
        else {
            setPrice(parseFloat(priceArr[0]?.price))
        }
    }, [size, finishing])

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === "size") {
            setSize(value)
        }
        if (name === "finishing") {
            setzfinishing(value)
        }
    }

    const increment=()=>{
        setQuantity(quantity+1)
    }

    const decrement=()=>{
        if(quantity-1>=1){
            setQuantity(quantity-1)
        }
    }

    const handleAdd = () => {
        const product={
            id:id,
            title:data[0]?.title,
            price:price,
            quantity:quantity,
            finishing:finishing,
            size:size,
            save:0,
            images:images[0]
        }
        dispatch(add(product));
        dispatch(total());
    };

    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb m-0 d-flex align-items-center">
                                        <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">product details</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className=" pt-4 pt-md-5 ">
                <div className="container">
                    <div className="row">
                        {/* <!-- product details wrapper start --> */}
                        <div className="col-lg-12 order-1 order-lg-2">
                            {/* <!-- product details inner end --> */}
                            <div className="product-details-inner">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <Swiper
                                            style={{
                                                '--swiper-navigation-color': '#fff',
                                                '--swiper-pagination-color': '#fff',
                                            }}
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false,
                                            }}
                                            loop={true}
                                            zoom={true}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs, Autoplay, Zoom]}
                                            className="mySwiper2"
                                        >
                                            {images?.map((list) => {
                                                return (
                                                    <SwiperSlide key={list}>
                                                        <img src={list} alt='' />
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                        <Swiper
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[Navigation, Thumbs]}
                                            className="mySwiper"
                                            onSwiper={setThumbsSwiper}
                                        >
                                            {images?.map((list) => {
                                                return (
                                                    <SwiperSlide key={list}>
                                                        <img src={list} alt='' />
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                    <div className="col-lg-7 ps-md-5">
                                        <div className="product-details-des">
                                            <div className="manufacturer-name">
                                                <a href="product-details.html">{data && (data[0]?.sub_category_name ? data[0]?.sub_category_name : data[0]?.category_name ? data[0]?.category_name : data[0]?.main_category_name)}</a>
                                            </div>
                                            <h3 className="product-name">{data && data[0]?.title}</h3>
                                            <div className="ratings d-flex  align-items-center mt-3 mb-3">
                                                <span className="me-2">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </span>
                                                <Link to="/" className="text-m">22 Reviews</Link>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-regular">${price}</span>
                                                {/* <span className="price-old"><del>$90.00</del></span> */}
                                            </div>
                                            {/* <h5 className="offer-text mt-3"><strong>Hurry up</strong>! offer ends in:</h5>

                                            <div className="availability">
                                                <i className="fa fa-check-circle"></i>
                                                <span>200 in stock</span>
                                            </div> */}
                                            <div className='d-flex'>
                                                <div className="pro-size">
                                                    <span className="option-title">size :</span>
                                                    <select className="nice-select" onChange={handleChange} name="size" value={size}>
                                                        {sizeArr?.map((list) => {
                                                            return (
                                                                <option value={list}>{list}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="pro-size ms-3">
                                                    <span className="option-title">finishing :</span>
                                                    <select className="nice-select" onChange={handleChange} name="finishing" value={finishing}>
                                                        {finishingCategoryArr?.map((list) => {
                                                            return (
                                                                <option value={list}>{list}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="quantity-cart-box d-flex align-items-center">
                                                <span className="option-title">qty:</span>
                                                <div className="quantity">
                                                    <div className="pro-qty"><span className="dec qtybtn" onClick={decrement}>-</span><span className='qa'>{quantity}</span><span className="inc qtybtn"  onClick={increment}>+</span></div>
                                                </div>
                                            </div>

                                            <p className="pro-desc">{data && data[0]?.short_description}</p>
                                            <div className="action_link mt-3">
                                                <button className="btn btn-cart2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleAdd}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product details inner end --> */}

                            {/* <!-- product details reviews start --> */}
                            <div className="product-details-reviews section-padding pb-0 mt-4 mt-md-5">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="product-review-info">
                                            <ul className="nav nav-tabs mb-4 review-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" data-bs-toggle="tab" href="#tab_one">Description</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" data-bs-toggle="tab" href="#tab_two">Information</a>
                                                </li> */}
                                            </ul>
                                            <div className="tab-content reviews-tab">
                                                <div className=" tab-pane active" id="tab_one">
                                                    <div className="tab-one"><div
                                                        dangerouslySetInnerHTML={{ __html: data && data[0]?.description }}
                                                    />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- product details reviews end --> */}
                        </div>
                        {/* <!-- product details wrapper end --> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductDetail
