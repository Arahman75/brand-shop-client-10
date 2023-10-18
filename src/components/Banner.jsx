import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner flex items-center justify-center'>
            <div className='max-w-[650px] text-center'>
                <h2 className='text-white text-5xl leading-tight'>Bangladesh Automobile <br /> Company is the best.</h2>
                <p className='text-white mt-5'>Our company is one of the best automobile companies in the world. We have many automotive brand products. This product is very useful. Since 1992 our services reach the entire country.</p>
            </div>
        </div>
    );
};

export default Banner;