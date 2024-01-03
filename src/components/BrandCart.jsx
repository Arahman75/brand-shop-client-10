import React from 'react';
import { Link } from 'react-router-dom';

const BrandCart = ({ brand }) => {
    const { image, brandName } = brand;



    return (
        <Link to='/products'>
            <div className="card bg-base-100 shadow-xl p-4">
                <figure>
                    <img className='w-3/4 h-[180px]' src={image} alt="brand photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl">{brandName}</h2>
                </div>
            </div></Link>
    );
};

export default BrandCart;