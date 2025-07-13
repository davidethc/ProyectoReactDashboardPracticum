import {
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface TopDocente {
  docente: string;
  total: number;
}

interface TopDocentesChartProps {
  data: TopDocente[];
}

export const TopDocentesChart = ({ data }: TopDocentesChartProps) => {
  const chartData = [...data].sort((a, b) => a.total - b.total);

  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        layout="vertical"
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 150,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis
          type="category"
          dataKey="docente"
          width={120}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="total"
          name="Total Actividades"
          fill="#22C55E"
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
