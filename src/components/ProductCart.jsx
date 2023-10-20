import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCart = ({ product, products, setProducts }) => {
    const { _id, image, name, brandName, price, description, rating } = product;

    const handleDelete = (id) => {
        console.log(id);
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


                fetch(`http://localhost:5000/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(product => product._id !== id);
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
                        <button className="btn">Details</button>
                        <Link to={`/updateProducts/${_id}`}><button className="btn">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;