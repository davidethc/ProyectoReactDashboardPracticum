import { TopMateriasChart } from "../components/TopMateriasChart";

export const Graficas = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gráficas</h2>
      <div className="grid gap-6">
        <TopMateriasChart />
      </div>
    </div>
  );
};
