import React, { Component, PropTypes } from 'react';
import SummaryBoxRow from './components/SummaryBoxRow';
import Box from '../../components/Box/';
import { Chart } from 'react-google-charts';

const Dashboard = (props) => {
  return (
    <div>
      <SummaryBoxRow 
        emails={13}
        orders={150}
        profit={15432}
      />

      <div className="row">
        <div className="col-md-7">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Company performance
            </h2>
            
            <Chart 
              chartType="AreaChart" 
              data={getAreaChartData()} 
              options={{
                hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
                vAxis: {minValue: 0},
                chartArea: {'width': '85%', 'height': '75%'},
                legend: {'position': 'bottom'}
              }}
              width={"100%"} 
              height={"300px"} 
            /> 
          </Box>
        </div>

        <div className="col-md-5">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Most popular categories
            </h2>

            <Chart 
              options={{ 
                chartArea: {'width': '100%', 'height': '75%'},
                legend: {'position': 'bottom'}
              }}
              chartType="PieChart" 
              data={getPieChartData()} 
              width={"100%"} 
              height={"300px"} 
            /> 
          </Box>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Chart #3
            </h2>

          </Box>
        </div>

        <div className="col-md-9">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Chart #4
            </h2>

          </Box>
        </div>
      </div>
    </div>
  );
};

function getAreaChartData() {
    return [
    ['Year', 'Sales', 'Expenses'],
    ['2013', 1000, 400],
    ['2014', 1170, 460],
    ['2015', 660, 1120],
    ['2016', 1030, 540]
  ];
}

function getPieChartData() {
    return [
      ['Goods', 'Amount of sold'],
      ['Cell phones', 210],
      ['TVs', 50],
      ['Fridges', 36],
      ['Laptops', 135],
      ['Vacuum cleaners', 8]
    ];
}

export default Dashboard;
