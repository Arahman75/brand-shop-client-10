import React from 'react';

const ServiceCart = ({ service }) => {
    const { name, image, description } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5">
            <figure><img className='w-[150px] h-[150]' src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ServiceCart;