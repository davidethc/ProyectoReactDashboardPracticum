import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { TopMateriasChart } from "../components/TopMateriasChart";

export const TopMateriasGraficas = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Link
          to="/graficas"
          className="flex items-center text-blue-600 hover:text-blue-700 mr-4"
        >
          <FaArrowLeft className="mr-2" />
          Volver
        </Link>
        <h2 className="text-2xl font-semibold text-gray-800">
          Análisis de Materias
        </h2>
      </div>

      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <TopMateriasChart
            data={[
              { asignatura: "Matemáticas", total: 120 },
              { asignatura: "Física", total: 95 },
              { asignatura: "Química", total: 85 },
              { asignatura: "Biología", total: 78 },
              { asignatura: "Historia", total: 65 },
            ]}
          />
        </div>
        <div className="bg-white rounded-lg shadow p-6"></div>
      </div>
    </div>
  );
};
