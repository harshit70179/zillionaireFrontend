import React from 'react'
import { Link } from 'react-router-dom'
import { useGetExploreQuery } from '../../../redux/exploreApi'

function Explore() {
    const {data}=useGetExploreQuery()
    return (
        <>
            <section id="services" className="services">
                <div className="container">
                    <div className="row">
                        {data?.map((list)=>{
                            return (
                                <div className=" col-md-6 mb-4" key={list.id}>
                                <div className="small_banner position-relative">
                                    <Link to={`/explore-products/${list?.main_category_id}`}>
                                    <img src={list?.image} className="img-fluid" alt='' />
                                    <Link to={`/explore-products/${list?.main_category_id}`} className="btn">
                                        EXPLORE 380+ STYLES
                                    </Link>
                                    </Link>
                                </div>
                            </div>
                            )
                        })}
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore
