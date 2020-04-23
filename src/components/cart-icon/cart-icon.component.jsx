import React from 'react'

import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart.actions'

import './cart-icon.styles.css'
import { ReactComponent as ShoppigBag } from '../../assets/11.1 shopping-bag.svg.svg'

const CartIcon = ({ children, toggleCartDropdown }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <div className='cart-number'>
            {children}
        </div>
        <ShoppigBag />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        toggleCartDropdown: () => dispatch(toggleCartDropdown())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)