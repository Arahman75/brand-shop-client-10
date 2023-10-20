import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBanner from '../components/ProductBanner';
import ProductCart from '../components/ProductCart';

const Products = () => {
    const loadedProducts = useLoaderData()
    const [products, setProducts] = useState(loadedProducts)

    return (
        <div>
            <ProductBanner></ProductBanner>
            <div>
                <h2 className='text-5xl font-bold text-center my-12  '>Our Product</h2>

            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    products.map(product => <ProductCart
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    ></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Products;