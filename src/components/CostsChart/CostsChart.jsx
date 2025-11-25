import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CostsChart({ title, data }) {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: `${title} — грн`,
        data: data.map(item => item.value),
        backgroundColor: "#ec8600ff",
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <Bar data={chartData} options={options} />
    </div>
  );
}
