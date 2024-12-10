import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Analysis = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["A", "B", "C"],
          datasets: [{ labels: "Revenue", data: [200, 300, 400] }],
        }}
      />
    </div>
  );
};

export default Analysis;
