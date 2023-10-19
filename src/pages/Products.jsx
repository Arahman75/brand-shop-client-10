import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBanner from '../components/ProductBanner';

const Products = () => {

    // const product = useLoaderData()

    return (
        <div>
            <ProductBanner></ProductBanner>
            <h3>Our Product</h3>
        </div>
    );
};

export default Products;