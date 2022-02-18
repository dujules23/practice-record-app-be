import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { ComposedChart, Bar, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// Generate Sales Data
function createData(day, minutes) {
  return { day, minutes };
}

const data = [
  createData('Monday','00'),
  createData('Tuesday','15'),
  createData('Wednesday','30'),
  createData('Thursday', '60'),
  createData('Friday','90'),
  createData('Saturday', '90'),
  createData('Sunday', '30'),
];

function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <ComposedChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="day" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="minutes" barSize={20} fill="#1a8fff" />
          <Line type="monotone" dataKey="minutes" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Chart;


