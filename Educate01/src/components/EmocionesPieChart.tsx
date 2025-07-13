import {
  ResponsiveContainer,
  PieChart,
  Tooltip,
  Legend,
  Cell,
  Pie,
} from "recharts";

import type { Emocion } from "../services/emocionesService";

interface EmocionesPieChartProps {
  data: Emocion;
}

const COLORS = {
  feliz: "#4CAF50",
  interesado: "#2196F3",
  motivado: "#9C27B0",
  entusiasmado: "#FF9800",
  preocupado: "#F44336",
  temeroso: "#795548",
  triste: "#607D8B",
  cansado: "#9E9E9E",
};

export const EmocionesPieChart = ({ data }: EmocionesPieChartProps) => {
  const pieData = [
    { name: "Feliz", value: data.feliz },
    { name: "Interesado", value: data.interesado },
    { name: "Motivado", value: data.motivado },
    { name: "Entusiasmado", value: data.entusiasmado },
    { name: "Preocupado", value: data.preocupado },
    { name: "Temeroso", value: data.temeroso },
    { name: "Triste", value: data.triste },
    { name: "Cansado", value: data.cansado },
  ];

  const total = pieData.reduce((acc, item) => acc + item.value, 0);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label={({ name, value = 0 }) =>
            `${name} (${((value / total) * 100).toFixed(1)}%)`
          }
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[entry.name.toLowerCase() as keyof typeof COLORS]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => [
            `${value} (${((value / total) * 100).toFixed(1)}%)`,
            "Cantidad",
          ]}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};
