import React from 'react';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }) => {
    const { _id, photo, name, brandName, price, rating } = product;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full p-4 justify-between">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{brandName}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;