import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import BrandCart from '../components/BrandCart';
import Banner2 from '../components/Banner2';
import OurService from '../components/OurService';


const Home = () => {
    const allBrands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='my-20'>
                <h2 className='text-5xl font-bold text-center mb-12  text-pink-500'>Our All Automotive Brands</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allBrands.map(brand => <BrandCart key={brand._id} brand={brand}></BrandCart>)
                    }
                </div>
            </div>
            <Banner2></Banner2>
            <OurService></OurService>
        </div>
    );
};

export default Home;