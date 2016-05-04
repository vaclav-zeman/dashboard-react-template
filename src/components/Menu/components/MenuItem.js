import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';

const MenuItem = (props) => {
  const {
    faClass,
    link,
    title
  } = props.item;

  return (
    <li className="Menu-item">
      <Link to={link} className="Menu-item-link">
        {faClass && <i className={cx('fa', faClass)} />}
        {title}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MenuItem;
