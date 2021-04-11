import React from 'react';
import 'tui-chart/dist/tui-chart.css';
import {BarChart} from '@toast-ui/react-chart';

const TestPage = () => {
  const data = {
    categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
      {
        name: 'Budget',
        data: [5000, 3000, 5000, 7000, 6000, 4000]
      },
      {
        name: 'Income',
        data: [8000, 1000, 7000, 2000, 5000, 3000]
      }
    ]
  };

  const options = {
    chart: {
      width: 300,
      height: 300,
      title: 'Monthly Revenue',
      format: '1,000'
    },
    yAxis: {
      title: 'Month'
    },
    xAxis: {
      title: 'Amount',
      min: 0,
      max: 9000,
      suffix: '$'
    },
  };
  return (
    <>
      <h1>hoge</h1>
      <BarChart
        data={data}
        options={options}
      />
    </>
  )
}

export default TestPage;
