import React from 'react';

import { connect } from 'react-redux'

import { removeProductFromCart, addProductToCart, decreaseProductFromCart } from '../../redux/cart/cart.actions'

import './checkout-item.styles.css'

const CheckoutItem = ({ item, removeProductFromCart, addProductToCart, decreaseProductFromCart }) => {
    const { name, imageUrl, price, number } = item
    return (
        <div className='checkut-item'>
            <div className='checkut-item__product'>
                <img src={imageUrl} width='100%' alt="" />
            </div>
            <div className='checkut-item__desc'>
                {name}
            </div>
            <div className='checkut-item__quantity'>
                <div className='checkut-item__quantity--inc'
                    onClick={() => addProductToCart(item)}
                >
                    +
                </div>
                {number}
                <div className='checkut-item__quantity--dec'
                    onClick={() => decreaseProductFromCart(item)}
                >
                    -
                </div>
            </div>
            <div className='checkut-item__price'>
                {price}
            </div>
            <div className='checkut-item__remove'
                onClick={() => removeProductFromCart(item)}
            >
                &#10005;
            </div>
        </div >
    );
};

const mapStateToProps = () =>({

})

const mapDispatchToProps = dispatch => {
    return {
        removeProductFromCart: item => dispatch(removeProductFromCart(item)),
        addProductToCart: item => dispatch(addProductToCart(item)),
        decreaseProductFromCart: item => dispatch(decreaseProductFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);