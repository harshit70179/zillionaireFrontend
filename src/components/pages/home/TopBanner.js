import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function TopBanner({topBanner}) {
    return (
        <>
            <Carousel autoPlay={true} infiniteLoop={true} verticalSwipe='vertical' stopOnHover={false}  showThumbs={false} interval='4000' transitionTime='500' swipeScrollTolerance="50" animationHandler="fade" showArrows={false} showStatus={false}>
                {topBanner?.map((list)=>{
                    return (
                        <div key={list.id}>
                        <img src={list.image} alt='' />
                    </div>
                    )
                })}
            </Carousel>
        </>
    )
}

export default TopBanner
