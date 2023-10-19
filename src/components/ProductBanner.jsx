import React from 'react';

const ProductBanner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative max-h-96 w-full">
                <img src=' https://i.ibb.co/FXZ3DJ9/pbg1.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Bangladesh Automobile</h2>
                        <p className='text-xl mt-4'>Our company is one of the best automobile companies in the world</p>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative max-h-96 w-full">
                <img src='https://i.ibb.co/WWmrs4p/pbg2.jpg" alt="banner2' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Bangladesh Automobile</h2>
                        <p className='text-xl mt-4'>Our company is one of the best automobile companies in the world</p>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative max-h-96 w-full">
                <img src='https://i.ibb.co/84NFcJG/pbg3.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Bangladesh Automobile</h2>
                        <p className='text-xl mt-4'>Our company is one of the best automobile companies in the world</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;