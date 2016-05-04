import React, { Component, PropTypes } from 'react';
import Box from '../components/Box/';

const Dashboard = (props) => {
  return (
    <div className="row">
      <div className="col-md-4">
				<Box>
          Box one
        </Box>
      </div>

      <div className="col-md-4">
				<Box>
          Box two
        </Box>
      </div>

      <div className="col-md-4">
				<Box>
          Box three
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
