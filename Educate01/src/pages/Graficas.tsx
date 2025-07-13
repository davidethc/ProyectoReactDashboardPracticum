import { FaUserTie, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Graficas = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Dashboard de Gráficas
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link to="/graficas/asignaturas" className="block">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <FaBook className="text-4xl opacity-90" />
              <div className="bg-white/20 rounded-lg p-2">
                <span className="text-sm font-medium">Ver Detalles</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Top Asignaturas</h3>
            <p className="text-blue-100">
              Top 10 asignaturas más activas por año
            </p>
          </div>
        </Link>

        <Link to="/graficas/docentes" className="block">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <FaUserTie className="text-4xl opacity-90" />
              <div className="bg-white/20 rounded-lg p-2">
                <span className="text-sm font-medium">Ver Detalles</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Top Docentes</h3>
            <p className="text-green-100">
              Top 10 docentes más activos por año
            </p>
          </div>
        </Link>
        <Link to="/graficas/porcentajes-sentimientos" className="block">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <FaUserTie className="text-4xl opacity-90" />
              <div className="bg-white/20 rounded-lg p-2">
                <span className="text-sm font-medium">Ver Detalles</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Top Docentes</h3>
            <p className="text-green-100">Porcentaje Sentimientos</p>
          </div>
        </Link>
      </div>
      {/* Aquí pueden ir gráficas generales si se necesitan */}
    </div>
  );
};
