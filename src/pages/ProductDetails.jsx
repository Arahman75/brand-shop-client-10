import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, image, name, brandName, category, description, price, rating } = product;
    return (
        <div className='my-12'>
            <h2 className='text-5xl font-bold text-center my-12 '>Product Details</h2>

            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full h-[400px]' src={image} alt="vehicle" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{brandName}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to='/myCart'>
                            <button className="btn btn-primary">Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;