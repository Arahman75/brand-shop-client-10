import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCart = ({ product, products, setProducts }) => {
    const { _id, image, name, brandName, price, description, rating } = product;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product delete successfully.',
                                'success'
                            )
                            const remaining = products.filter(cofe => cofe._id !== _id);
                            setProducts(remaining)
                        }
                    })

            }
        })
    }



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="flex w-full p-4 justify-between">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{brandName}</p>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{description}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="btn">Details</button></Link>
                        <Link to={`/updateProducts/${_id}`}><button className="btn">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;