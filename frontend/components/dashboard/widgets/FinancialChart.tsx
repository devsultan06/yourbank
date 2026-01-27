"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        color: "#B3B3B3",
        usePointStyle: true,
        boxWidth: 8,
        padding: 20,
        font: {
          family: "Inter, sans-serif",
          size: 12,
        },
      },
    },
    tooltip: {
      backgroundColor: "#1C1C1C",
      titleColor: "#fff",
      bodyColor: "#B3B3B3",
      borderColor: "#333",
      borderWidth: 1,
      padding: 12,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#333",
        drawBorder: false,
      },
      ticks: {
        color: "#59595A",
        font: {
          size: 11,
        },
      },
    },
    y: {
      grid: {
        color: "#262626",
        drawBorder: false,
      },
      ticks: {
        display: false, // Hide y-axis numbers for cleaner look
      },
      border: {
        display: false,
      },
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

const labels = ["1", "5", "10", "15", "20", "25", "30"];

const data = {
  labels,
  datasets: [
    {
      label: "Money In",
      data: [1200, 1900, 1500, 2200, 1800, 2500, 3100],
      borderColor: "#CAFF33", // Primary Green
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(202, 255, 51, 0.2)");
        gradient.addColorStop(1, "rgba(202, 255, 51, 0)");
        return gradient;
      },
      tension: 0.4,
      fill: true,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
    {
      label: "Money Out",
      data: [800, 1100, 900, 1400, 1200, 1600, 1300],
      borderColor: "#fff",
      borderDash: [5, 5],
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
    },
  ],
};

export default function FinancialChart() {
  return (
    <div className="bg-[#1C1C1C] border border-[#262626] rounded-[30px] p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-semibold">Financial Activity</h3>
        <select className="bg-[#262626] text-xs text-white border border-[#333] rounded-lg px-3 py-1.5 focus:outline-none">
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
          <option>Year to Date</option>
        </select>
      </div>
      <div className="flex-1 w-full min-h-[200px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
