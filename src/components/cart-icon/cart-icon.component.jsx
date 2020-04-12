import React from 'react'

import { connect } from 'react-redux'
import  {toggleCartDropdownDisplay}  from '../../redux/cart-dropdown/cartDropdown.actions'

import './cart-icon.styles.css'
import { ReactComponent as ShoppigBag } from '../../assets/11.1 shopping-bag.svg.svg'

const CartIcon = ({ children, toggleCartDropdownDisplay }) => (
    <div className='cart-icon' onClick={toggleCartDropdownDisplay}>
        <div className='cart-number'>
            {children}
        </div>
        <ShoppigBag />
    </div>
)


const mapDispatchToProps = dispatch => {
    return {
        toggleCartDropdownDisplay: () => {
            return dispatch(toggleCartDropdownDisplay())
        }
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)