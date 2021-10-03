import React, { useState } from 'react';
import moment from 'moment';
import {
  XAxis,
  ResponsiveContainer,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  AreaChart,
  LineChart,
  Line,
} from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import './Chart.css';

const data = [];
for (let num = 1; num <= 12; num++) {
  data.push({
    date: moment(`${num}-01-2021`).add(0, 'month').format('MMM'),
    // date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: num * 1000,
    graphData: Math.floor(10000 * Math.random()),
  });
}

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__heading">
        <h4>Total Deposits</h4>
        <h5>Jan 01 - Dec 31, 2020 </h5>
      </div>
      <ResponsiveContainer width="100%" height={235}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="graphData" stroke="#8674FE" strokeWidth={2} />
          <XAxis dataKey="date" />
          <YAxis dataKey="value" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
