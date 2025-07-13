import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useAppSelector } from "../store/store";

export const SideBar = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.value);

  return (
    <nav
      className={`fixed top-14 left-0 h-[calc(100%-3.5rem)] bg-red-300 w-[200px] transform transition-all duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4 space-y-2">
        <Link
          to="/sistema"
          className="flex items-center text-white hover:bg-red-400 p-3 rounded-lg transition-colors"
        >
          <FaAngleRight className="text-xl" />
          <span className="ml-3 text-lg">Sistema</span>
        </Link>
        <Link
          to="/graficas"
          className="flex items-center text-white hover:bg-red-400 p-3 rounded-lg transition-colors"
        >
          <FaAngleRight className="text-xl" />
          <span className="ml-3 text-lg">Gráficas</span>
        </Link>
      </div>
    </nav>
  );
};
