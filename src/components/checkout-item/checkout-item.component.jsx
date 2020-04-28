import React from 'react';

import './checkout-item.styles.css'

const CheckoutItem = ({ name, imageUrl, price, number }) => {
    return (
        <div className='checkut-item'>
            <div className='checkut-item__product'>
                <img src={imageUrl} width='100%' alt="" />
            </div>
            <div className='checkut-item__desc'>
                {name}
            </div>
            <div className='checkut-item__quantity'>
                {number}
            </div>
            <div className='checkut-item__price'>
                {price}
            </div>
            <div className='checkut-item__remove'>
                &#10005;
            </div>
        </div >
    );
};

export default CheckoutItem;