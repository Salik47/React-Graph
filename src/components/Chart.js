import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const [chartData, setChartData] = useState({});

  const chart = function () {
    setChartData({
      labels: ["", "week 1", "week 2", "week 3", "week 4"],
      datasets: [
        {
          label: "Number of enquiries",
          data: [0, 15, 20, 25, 12],
          borderColor: ["rgba(75, 192, 192, 0.6)"],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          pointBackgroundColor: "rgba(75, 192, 192, 0.6)",
          pointBorderColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });
  };

  useEffect(function () {
    chart();
  }, []);

  return (
    <Line
      data={chartData}
      options={{
        title: { text: "Charts in React", display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 50,
                stepSize: 5,
                beginsAtZero: true
              },
            },
          ],
        },
      }}
    />
  );
}

export default Chart;
