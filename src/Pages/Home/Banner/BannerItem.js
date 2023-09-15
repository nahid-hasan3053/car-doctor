import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {

    const {image, preview, next, id} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img '>
            <img src={image} className='rounded-xl' alt="" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>Affordable <br />
                Price for Car <br />
                Servicing</h1>
            </div>
            <div className="absolute flex justify-end transform w-2/5 -translate-y-1/2 left-24 top-1/2">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform w-2/5 -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning px-6 py-4 mr font-semi bold mr-4">Discover More</button>
                <button className="btn btn-outline btn-warning px-6 py-4 mr font-semi bold">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${preview}`} className="btn btn-circle me-3">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div> 
    );
};

export default BannerItem;