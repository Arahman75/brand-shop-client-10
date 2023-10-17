import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const AddProduct = () => {
    const { name } = useContext(AuthContext)
    return (
        <div>
            <h2>Add Product :{name}</h2>
        </div>
    );
};

export default AddProduct;