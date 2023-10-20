
import Swal from 'sweetalert2';

const AddProduct = () => {


    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct = {
            name, brandName, price, description, category, rating, photo
        }
        console.log(newProduct);

        fetch('https://brand-shop-server-as10-lkff23d4q-abdur-rahmans-projects.vercel.app/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className=''>
            <h2 className='text-center text-5xl font-bold mt-6'>Add New Product</h2>
            <form onSubmit={handleAddProduct}>

                <div className='mb-6 md:w-1/2 mx-auto'>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='brandName' placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Category Type</span>
                        </label>
                        <label className="input-group">
                            <select name='category' placeholder='' className="select  w-full">
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
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='description' placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mb-6 flex justify-center'>
                    <input className="btn btn-success font-bold" type="submit" value="Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;