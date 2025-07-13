import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

import { TopMateriasChart } from "../components/TopMateriasChart";
import { useTopMaterias } from "../hooks/useTopMaterias";

export const TopAsignaturas = () => {
  const [selectedYear, setSelectedYear] = useState(2020);
  const { data, isLoading, error } = useTopMaterias(selectedYear);

  const years = Array.from(
    { length: new Date().getFullYear() - 2019 },
    (_, i) => 2020 + i
  );

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-red-500">
          Error al cargar los datos: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            to="/graficas"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <IoArrowBack className="text-2xl" />
          </Link>
          <h2 className="text-2xl font-semibold text-gray-800">
            Top 10 Asignaturas
          </h2>
        </div>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <TopMateriasChart data={data} />
      )}
    </div>
  );
};
