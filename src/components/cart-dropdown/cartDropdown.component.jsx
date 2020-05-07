import React from 'react'

import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartDropdown } from '../../redux/cart/cart.actions'

import CartDropdownShopItem from '../cart-dropdown_shopItem/cart-dropdown_shopItem.component'
import CustomBtn from '../customBtn/customBtn.component'
import './cartDropdown.css'

const CartDropdown = ({ className, items, history, dispatch }) => (
    <div className={`cart-dropdown ${className}`}>

        <div className='cart-dropdown__items'>
            {
                items.length ?
                    items.map(item => {
                        return < CartDropdownShopItem key={item.id} {...item} />
                    })
                    :
                    <div className='cart-dropdown__items__empty'>Your cart is empty!</div>
            }
        </div>
        <Link to='/checkout'>
            <CustomBtn className='cart-dropdown__btn' fullWidth
                onClick={() => handle_checkoutBtn(history, dispatch)}>
                Shop Your Cloths!
        </CustomBtn>
        </Link>
    </div >
)




const handle_checkoutBtn = (history, dispatch) => {
    // history.push('/checkout')
    dispatch(toggleCartDropdown())
}

const mapStateToProps = createStructuredSelector({
    items: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))