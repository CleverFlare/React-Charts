// @ts-nocheck
import React from "react";
import "chart.js/auto";
import { Paper, Typography } from "@mui/material";
import { Chart as ReactChart } from "react-chartjs-2";

const Chart = ({ variant = "bar" }) => {
  return (
    <Paper sx={{ width: 400, height: 300, p: 2 }}>
      <ReactChart
        type={variant}
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Something",
              data: [12, 19, 3, 5, 2, 3],
              borderRadius: variant === "bar" ? 40 : false,
              borderSkipped: variant === "bar" ? false : true,
              borderColor:
                variant === "line" ? "rgba(255, 99, 132, 0.5)" : "white",
              tension: variant === "line" ? 0.4 : 0,
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
            x: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },
        }}
      />
    </Paper>
  );
};

export default Chart;
