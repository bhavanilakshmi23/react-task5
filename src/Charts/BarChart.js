import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: false,
            text: "Chart.js Bar Chart"
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [2000, 4000, 6000, 10000, 12000, 15000],
            backgroundColor: "hwb(219deg 22% 13%)",
            barPercentage: 0.4
        }
    ]
};

export function BarChart() {
    return <Bar options={options} data={data} />;
}