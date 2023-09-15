import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import BannerItem from './BannerItem';

const Banner = () => {

    const bannerData = [
        {
            image: image1,
            preview: 4,
            id: 1,
            next: 2
        },
        {
            image: image2,
            preview: 1,
            id: 2,
            next: 3
        },
        {
            image: image3,
            preview: 2,
            id: 3,
            next: 4
        },
        {
            image: image4,
            preview: 3,
            id: 4,
            next: 1
        },
    ]

    return (
        <div>
            <div className="carousel w-full py-10">
                {
                    bannerData.map(slide => <BannerItem key={slide.id} slide={slide}></BannerItem>)
                }
                {/* <BannerItem image={image1}></BannerItem> */}
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} alt="" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>  */}
            </div>
        </div>
    );
};

export default Banner;