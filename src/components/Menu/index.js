import React, { PropTypes } from 'react';
import MenuItem from './components/MenuItem';

import './menu.scss';

const Menu = (props) => {
  const {
    caption,
    items
  } = props;

  return (
    <div>
      {
        caption && 
        <h3 className="Menu-caption">
          {caption}
        </h3>
      }
      <ul className="Menu">
        {items.map(item => <MenuItem key={Math.random()} item={item} />)}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.array.isRequired
};

export default Menu;
