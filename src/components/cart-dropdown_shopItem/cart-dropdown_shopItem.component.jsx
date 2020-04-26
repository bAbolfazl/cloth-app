import React from 'react';

import './cart-dropdown_shopItem.styles.css'


const CartDropdownShopItem = ({ name, number, price, imageUrl, id }) => {
    return (
        <div className='cart-dropdown__shop-item'>
            <div className='cart-dropdown__shop-item__img'>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <div className='cart-dropdown__shop-item__name'>
                    {name}
                </div>
                <div className='cart-dropdown__shop-item__number'>
                    <span>
                        {number} * ${price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartDropdownShopItem;