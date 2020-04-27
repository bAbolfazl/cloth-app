import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import CartDropdownShopItem from '../cart-dropdown_shopItem/cart-dropdown_shopItem.component'
import CustomBtn from '../customBtn/customBtn.component'
import './cartDropdown.css'

const CartDropdown = ({ className, items }) => (
    <div className={`cart-dropdown ${className}`}>

        <div className='cart-dropdown__items'>
            {
                // console.log('asdf', items)
                items.map(item => {
                    return < CartDropdownShopItem key={item.id} {...item} />
                })
            }
        </div>

        <CustomBtn className='cart-dropdown__btn' fullWidth>
            Shop Your Cloths!
        </CustomBtn>
    </div>
)

const mapStateToProps = state => {
    return {
        items: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown)