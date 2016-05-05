import React, { Component, PropTypes } from 'react';
import SummaryBoxRow from './components/SummaryBoxRow';
import Box from '../../components/Box/';

const Dashboard = (props) => {
  return (
    <div>
      <SummaryBoxRow 
        emails={13}
        orders={150}
        profit={15432}
      />

      <div className="row">
        <div className="col-md-6">
          <Box>
            <h2>Chart #1</h2>
          </Box>
        </div>

        <div className="col-md-6">
          <Box>
            <h2>Chart #2</h2>
          </Box>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Box>
            <h2>Chart #3</h2>
          </Box>
        </div>

        <div className="col-md-9">
          <Box>
            <h2>Chart #4</h2>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
