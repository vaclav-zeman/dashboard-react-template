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
              chartType="ComboChart" 
              data={getComboChartData()} 
              options={{
                chartArea: {'width': '85%', 'height': '75%'},
                legend: {'position': 'bottom'},
                seriesType: 'bars',
                series: {5: {type: 'line'}},
                colors: ['#12c5d6', '#40d47e']
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
                legend: {'position': 'bottom'},
                colors: ['#12c5d6', '#40d47e', '#ec8f6e', '#ea6153', '#f6c7b6']
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
        <div className="col-md-4">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Quick Settings
            </h2>
          </Box>
        </div>

        <div className="col-md-8">
          <Box className="ChartBox">
            <h2 className="ChartBox-title">
              Most shipping to
            </h2>

            <Chart 
              chartType="GeoChart" 
              options={{colors: ['#40d47e']}}
              data={getGeoChartData()} 
              width={"100%"} 
              height={"300px"} 
            /> 
          </Box>
        </div>
      </div>
    </div>
  );
};

// These functions are providing only mockup data
function getAreaChartData() {
    return [
    ['Year', 'Sales', 'Expenses'],
    ['2012', 900, 350],
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

function getGeoChartData() {
  return [
    ['Country', 'Popularity'],
    ['Germany', 200],
    ['United States', 300],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 600],
    ['RU', 700]
  ];
}

function getComboChartData() {
  return [
     ['Month', 'Sales', 'Profit'],
     ['2015/10', 953, 335],
     ['2015/11', 860, 401],
     ['2015/12', 425, 100],
     ['2016/01', 1123, 599],
     ['2016/02', 1586, 996]
  ];
}

export default Dashboard;
