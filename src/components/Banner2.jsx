import React from 'react';
import bg2 from '../assets/image/bg2.jpg';
import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bg2} className="w-full rounded-lg shadow-2xl" />
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">Bangladesh Automobile</h1>
                    <p className="py-6">Our company is one of the best automobile companies in the world. We have many automotive brand products. This product is very useful. Since 1992 our services reach the entire country.</p>
                    <Link to='/login'> <button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner2;