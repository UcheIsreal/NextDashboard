"use client";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  BarElement,
  Title,
  LinearScale,
  Legend,
} from "chart.js";

ChartJS.register(
  Tooltip,
  CategoryScale,
  BarElement,
  Title,
  LinearScale,
  Legend
);

const Barchat = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: 'Sales $',
          data: [18337, 22201, 19490, 17987, 17843, 22475, 24182],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);

  return (
    <>
      <div className="w-[70vw] sm:w-[44vw] sm:col-span-1 relative flex items-center  lg:h-[70vh] h-[50vh] border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default Barchat;
