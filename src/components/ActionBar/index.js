import React, { PropTypes } from 'react';

import './actionbar.scss';

const ActionBar = (props) => {
  return (
    <div className="ActionBar">
			<button className="ActionBar-button fa fa-anchor"></button>
      <button className="ActionBar-button fa fa-bell-slash"></button>
      <button className="ActionBar-button fa fa-bolt"></button>
    </div>
  );
};

export default ActionBar;