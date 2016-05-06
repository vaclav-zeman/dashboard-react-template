import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Row from './components/Row';
import _ from 'lodash';

import './table.scss';

const DataTable = (props) => {
  const {
    data,
    titles
  } = props.data;

  return (
    <table className={cx('DataTable', props.className)}>
      {props.caption && <caption>{props.caption}</caption>}
      <thead>
        <tr>
        {titles.map(title => <Row key={_.uniqueId()} data={title} isHeading />)}
        </tr>
      </thead>
      <tbody>
        {data.map(item => <Row key={_.uniqueId()} data={item} />)}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  caption: PropTypes.string,
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

/*
  Data structure example:
  {
   titles: ['ID', 'Name', 'E-mail'],
   data: [
      [1, 'Charles', 'charles@deque.com'],
      ...
   ] 
  }
*/

export default DataTable;
