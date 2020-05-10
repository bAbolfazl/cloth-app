import React from "react";

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectMenuListSections } from '../../redux/menuList/menuList.selectors'

import MenuItem from "../menuItem/menuItem.component";

import "./manuList.style.css";

const MenuList = ({ sections }) => {

  // console.log(this.state.sections);
  // const { title, id, imageUrl, size } = this.state.sections;
  // console.log(title)
  return (
    <div className="manuList">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => {
        return (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            className="manuItem"
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectMenuListSections
})

export default connect(mapStateToProps)(MenuList);
