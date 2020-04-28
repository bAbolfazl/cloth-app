import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartDropdown } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.css'
import { ReactComponent as ShoppigBag } from '../../assets/11.1 shopping-bag.svg.svg'

const CartIcon = ({ children, toggleCartDropdown, itemsNo }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <div className='cart-number'>
            {itemsNo}
        </div>
        <ShoppigBag />
    </div>
)

const mapDispatchToProps = dispatch => {
    return {
        toggleCartDropdown: () => dispatch(toggleCartDropdown())
    }
}

const mapStateToProps = createStructuredSelector({
    itemsNo: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)