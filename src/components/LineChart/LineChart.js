import React from 'react';
import  { Doughnut } from "react-chartjs-2";



const LineChart = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [23,56,76],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [65,87,54],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

    return (
        <div>
                {/* <Doughnut
                data={data}
                /> */}
               
        </div>
    );
};

export default LineChart;