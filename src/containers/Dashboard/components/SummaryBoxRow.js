import React, { Component, PropTypes } from 'react';
import Box from '../../../components/Box/';
import formatMoney from '../../../utils/format';

const SummaryBoxRow = (props) => {
  const {
    orders,
    profit,
    emails,
    toBeShipped
  } = props;

  return (
    <div className="row">
      <div className="col-md-3">
        <Box className="SummaryBox Box--red">
          <h2 className="SummaryBox-title">
            Orders
          </h2>

          <strong className="SummaryBox-value">
            {orders || 0}
          </strong>

          <i className="SummaryBox-icon fa fa-users" />
        </Box>
      </div>

      <div className="col-md-3">
				<Box className="SummaryBox Box--blue">
          <h2 className="SummaryBox-title">
            Profit
          </h2>
          
          <strong className="SummaryBox-value">
           {'$'} {formatMoney(profit) || 0}
          </strong>

          <i className="SummaryBox-icon fa fa-dollar" />
        </Box>
      </div>

      <div className="col-md-3">
        <Box className="SummaryBox Box--green">
          <h2 className="SummaryBox-title">
            Unanswered e-mails
          </h2>
          
          <strong className="SummaryBox-value">
            {emails || 0}
          </strong>

          <i className="SummaryBox-icon fa fa-envelope" />
        </Box>
      </div>

      <div className="col-md-3">
        <Box className="SummaryBox Box--orange">
          <h2 className="SummaryBox-title">
            To be shipped
          </h2>
          
          <strong className="SummaryBox-value">
            {toBeShipped || 0}
          </strong>

          <i className="SummaryBox-icon fa fa-paper-plane" />
        </Box>
      </div>
    </div>
  );
};

SummaryBoxRow.propTypes = {
  orders: PropTypes.number,
  profit: PropTypes.number,
  emails: PropTypes.number,
  toBeShipped: PropTypes.number
};

export default SummaryBoxRow;
