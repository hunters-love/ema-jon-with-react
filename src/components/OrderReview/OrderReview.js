import React from 'react';
import UseProduct from '../../hooks/UseProduct';

const OrderReview = () => {
    const [products] = UseProduct();
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;