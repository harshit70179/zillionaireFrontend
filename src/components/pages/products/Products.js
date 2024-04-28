import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../widgets/Header'
import Footer from '../../widgets/Footer'
import { useGetProductsMutation } from '../../../redux/productsApi'

function Products() {
    const {main_category_id,category_id,sub_category_id,main_category_name,category_name,sub_category_name}=useParams()
    const [getProducts,{data}]=useGetProductsMutation()
   console.log(sub_category_name,"main_category_name")
   useEffect(()=>{
       if(main_category_id || category_id || sub_category_id){
        const sendData={
            main_category_id,
            category_id,
            sub_category_id
        }
        getProducts(sendData)
       }
   },[main_category_id,category_id,sub_category_id])

   console.log("data",data)

    return (
        <>
        <Header/>
            <div className="breadcrumb-area bg_light pt-5 pb-4 text-center">
                <div className="container">
                    <h3 className="mb-4">{category_name?category_name:sub_category_name?sub_category_name:main_category_name}</h3>
                    {/* <b>RING IN THE REAL GEMSTONE ENERGY</b> */}
                    <p>Every piece tells a unique story and every stack is a celebration of you. </p>
                </div>
            </div>
            <section className="home_product_item">
                <div className="container">
                    <div className="row">
                        {
                            data?.map((list)=>{
                                let image=JSON.parse(list.images)
                                let price=JSON.parse(list.price)
                                return (
                                    <div className="col-md-4 mb-2" key={list.id}>
                                    <div className="shadow1">
                                        <div className="img_item  ">
                                            <Link to={`/product-detail/${list.id}`}>
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
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Products
