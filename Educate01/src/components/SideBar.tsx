import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/store";
import materiasService from "../services/materiasService";
import { toggleSideBar } from "../store/sidabarSlice";

export const SideBar = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.sidebar.value);

  const handleOverlayClick = () => {
    if (isOpen) {
      dispatch(toggleSideBar());
    }
  };

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await materiasService.getTopMaterias();
        console.log("API Response:", response);
      } catch (error) {
        console.error("Error calling API:", error);
      }
    };

    checkApi();
  }, []);

  return (
    <>
      {isOpen && <div className="fixed inset-0" onClick={handleOverlayClick} />}

      <nav
        className={`fixed top-14 left-0 h-[calc(100%-3.5rem)] bg-red-300 w-[200px] transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          <Link
            onClick={() => dispatch(toggleSideBar())}
            to="/sistema"
            className="flex items-center text-white hover:bg-red-400 p-3 rounded-lg transition-colors"
          >
            <FaAngleRight className="text-xl" />
            <span className="ml-3 text-lg">Sistema</span>
          </Link>
          <Link
            onClick={() => dispatch(toggleSideBar())}
            to="/graficas"
            className="flex items-center text-white hover:bg-red-400 p-3 rounded-lg transition-colors"
          >
            <FaAngleRight className="text-xl" />
            <span className="ml-3 text-lg">Gráficas</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
