import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const loadedProducts = useLoaderData()
    // console.log(loadedProducts);
    const { _id, image, name, brandName, category, description, price, rating } = loadedProducts;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const image = form.image.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updateProduct = {
            name, brandName, price, description, category, rating, image
        }
        console.log(updateProduct);

        fetch(`https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className=''>
            <h2 className='text-center text-5xl font-bold mt-6'>Update Product {name}</h2>
            <form onSubmit={handleUpdateProduct}>

                <div className='mb-6 md:w-1/2 mx-auto'>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='brandName' defaultValue={brandName} placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='image' defaultValue={image} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Category Type</span>
                        </label>
                        <label className="input-group">
                            <select name='category' defaultValue={category} placeholder='' className="select  w-full">
                                <option>Select your product</option>
                                <option>Honda</option>
                                <option>Tesla</option>
                                <option>Volvo</option>
                                <option>BMW</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={price} name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={description} name='description' placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-6 flex justify-center'>
                    <input className="btn btn-success font-bold" type="submit" value="Update Product" />
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;