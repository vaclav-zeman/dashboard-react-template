import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

const MenuItem = (props) => {
  const {
    customClass,
    link,
    title
  } = props.item;

  return (
    <li className={cx('Menu-item', customClass)}>
      <Link to={link} className="Menu-item-link">
        {title}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MenuItem;
