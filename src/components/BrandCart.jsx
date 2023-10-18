import React from 'react';

const BrandCart = ({ brand }) => {
    const { image, name } = brand;
    return (
        <div className="card bg-base-100 shadow-xl p-4">
            <figure><img className='w-3/4 h-[180px]' src={image} alt="brand photo" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-2xl">{name}</h2>

            </div>
        </div>
    );
};

export default BrandCart;