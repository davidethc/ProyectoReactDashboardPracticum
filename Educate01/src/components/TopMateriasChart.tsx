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

import { useTopMaterias } from "../hooks/useTopMaterias";

export const TopMateriasChart = () => {
  const { materias, loading, error } = useTopMaterias();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-full h-[400px] p-4">
      <h2 className="text-xl font-bold mb-4">Top 5 Materias</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={materias}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre_asignatura" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" name="Total de Estudiantes" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
