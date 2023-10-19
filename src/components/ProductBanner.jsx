import React from 'react';

const ProductBanner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative max-h-screen w-full">
                <img src='https://i.ibb.co/3cpWzvY/banner1.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Wedding Bliss Bangladesh</h2>
                        <p className='text-xl mt-4'>Wedding Bliss Bangladesh is a leading event management company specializing in creating unforgettable wedding experiences. With years of experience and a dedicated team of professionals, we have successfully executed numerous weddings, making us a trusted name in the industry.</p>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative max-h-screen w-full">
                <img src='https://i.ibb.co/s2pkM3z/banner2.jpg" alt="banner2' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Wedding Bliss Bangladesh</h2>
                        <p className='text-xl mt-4'>Wedding Bliss Bangladesh is a leading event management company specializing in creating unforgettable wedding experiences. With years of experience and a dedicated team of professionals, we have successfully executed numerous weddings, making us a trusted name in the industry.</p>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative max-h-screen w-full">
                <img src='https://i.ibb.co/h2SdsKQ/banner3.jpg' className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className='absolute top-36 left-1/4'>
                    <div className='text-white max-w-xl text-center'>
                        <h2 className='text-4xl font-bold'>Wedding Bliss Bangladesh</h2>
                        <p className='text-xl mt-4'>Wedding Bliss Bangladesh is a leading event management company specializing in creating unforgettable wedding experiences. With years of experience and a dedicated team of professionals, we have successfully executed numerous weddings, making us a trusted name in the industry.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductBanner;