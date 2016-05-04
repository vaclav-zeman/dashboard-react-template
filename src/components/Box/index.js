import React, { PropTypes } from 'react';
import cx from 'classnames';

import './box.scss';

// Content box
const Box = (props) => {
  return (
    <section className={cx('Box', props.customClass)}>
      {props.children}
    </section>
  );
};

Box.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string
};

export default Box;
