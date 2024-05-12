import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetAllProductsQuery } from '../../../redux/productsApi'
import { useAuth } from '../../../AuthContext'

function Search() {
    const {searchValue}=useParams()
    const {wishList,handleWishlist,authenticated } = useAuth();
    const { data: allProducts } = useGetAllProductsQuery()
    const [data,setData]=useState([])

    useEffect(()=>{
         if(searchValue){
            handleSearchChange(searchValue)
         }
    },[searchValue,allProducts])

    const handleSearchChange = (query) => {
        const filtered = allProducts?.filter(item =>
            Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
            )
        );
        setData(filtered);
    }
  
    const handleClick=(id)=>{
        handleWishlist(id)
    }

    return (
        <>
            <Header />
            <div className="breadcrumb-area bg_light pt-5 pb-5 text-center">
                <div className="container">
                    <h3 className="mb-4">Search</h3>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                   <div className="row">
                        {
                            data && data?.map((list) => {
                                let image = JSON.parse(list.images)
                                let price = JSON.parse(list.price)
                                let discount=price[0]?.save>0?(price[0].price)-((price[0].price*price[0].save)/100):price[0].price
                                return (
                                    <div className="col-md-4 mb-2" key={list.id}>
                                        <div className="shadow1">
                                            <div className="img_item  mb-3 heart-img">
                                            {price[0]?.save>0?<span className='s_offer'>{price[0]?.save}% OFF</span>:""}
                                                <Link to={`/product-detail/${list.id}`} className='heart-img'>
                                                    <img src={image[0]} className="img-fluid" alt="" />
                                                </Link>
                                                {authenticated && (wishList.includes(list.id)?<i class="bi bi-suit-heart-fill" onClick={()=>{handleClick(list.id)}}></i>:<i className='bi bi-heart' onClick={()=>{handleClick(list.id)}}></i>)}
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

export default Search
