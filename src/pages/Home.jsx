import React from 'react';
import Banner from '../components/Banner';
import { useLoaderData } from 'react-router-dom';
import BrandCart from '../components/BrandCart';

const Home = () => {
    const allBrands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='my-24'>
                <h2 className='text-5xl font-bold text-center mb-6  text-pink-500'>Our All Automotive Brands : {allBrands.length}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allBrands.map(brand => <BrandCart key={brand._id} brand={brand}></BrandCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;