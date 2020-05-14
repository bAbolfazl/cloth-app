import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectShopCollections } from '../../redux/shop/shop.selectors'

import ShopPrev from "../../components/shopPrev/shopPrev.component";
import './shop-sections.styles.css'

const shopSections = ({ collections }) => (
    <div className="shop-sections">
        {collections.map(shop => {
            return (
                <div>
                    <ShopPrev
                        key={shop.id}
                        title={shop.title}
                        routeName={shop.routeName}
                        items={shop.items}
                    />
                </div>
            );
        })}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(shopSections)