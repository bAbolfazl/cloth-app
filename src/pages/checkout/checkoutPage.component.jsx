import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartItemsPrice } from '../../redux/cart/cart.selectors'

import './checkoutPage.styles.css'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckOutPage = ({ cartItems, cartItemsTotalPrice }) => {
    return (
        <div className='checkout-page'>

            <div className='checkout-page__table'>
                <div className='checkout-page__table__header'>
                    <div classname="checkout-page__table__header__item">Product</div>
                    <div classname="checkout-page__table__header__item">Description</div>
                    <div classname="checkout-page__table__header__item">Quantity</div>
                    <div classname="checkout-page__table__header__item">Price</div>
                    <div classname="checkout-page__table__header__item">Remove</div>
                </div>

                <div className='checkout-page__table__body'>
                    {
                        cartItems.map((item) => {
                            return <CheckoutItem key={item.id} item={item} />
                        })
                    }
                </div>

                <div className='checkout-page__table__footer'>
                    <span>TOTAL: $</span>
                    <span>{cartItemsTotalPrice}</span>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotalPrice: selectCartItemsPrice
})

export default connect(mapStateToProps)(CheckOutPage)