import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import _ from 'lodash';

const MenuItem = (props) => {
  const {
    count, // Number of items in the category (optional)
    faClass, // Font awesome class
    link,
    title
  } = props.item;

  return (
    <li className="Menu-item" key={_.uniqueId()}>
      <Link to={link} className="Menu-item-link">
        {faClass && <i className={cx('fa', faClass)} />}
        {title}

        {
          count &&
          <span className="Menu-item-count">
            {count}
          </span>
        }
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default MenuItem;
