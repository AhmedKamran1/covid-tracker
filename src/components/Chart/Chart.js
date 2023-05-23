import { useEffect, useState } from "react";
import classes from "./Chart.module.css"
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const Chart = (props) => {
  const { active, confirmed, deaths } = props.data;
  console.log(active, confirmed, deaths);
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(202, 44, 202, 0.432)",
              "rgba(206, 181, 37, 0.425)",
              "rgba(233, 12, 12, 0.5)",
            ],
            data: [confirmed, active, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true },
      }}
    />
  ) : null;

  return (
    <div className={classes.graph}>
      {barChart}
    </div>
  );
  
};

export default Chart;
