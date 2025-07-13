import { FaAngleRight, FaApple } from "react-icons/fa";
import { Link } from "react-router";

import { closeSideBar } from "../store/sidabarSlice";
import { useAppSelector } from "../store/store";
import { useAppDispatch } from "../store/store";

export const SideBar = () => {
  const isSidebarOpen = useAppSelector((state) => state.sidebar.value);
  const dispatch = useAppDispatch();

  return (
    <nav
      className={`bg-red-300 w-[200px] min-h-screen flex flex-col fixed transition-all duration-300 ${
        isSidebarOpen ? "left-0" : "-left-[200px]"
      }`}
    >
      <div className="h-14 flex items-center justify-center">
        <FaApple className="text-white text-4xl" />
      </div>
      <div className="flex flex-col p-4">
        <Link
          onClick={() => dispatch(closeSideBar())}
          to={"#"}
          className="flex flex-row items-center text-white hover:bg-red-400 p-2 rounded transition-colors"
        >
          <FaAngleRight className="text-xl" />
          <span className="ml-3 text-lg">Sistema</span>
        </Link>
        <Link
          onClick={() => dispatch(closeSideBar())}
          to={"#"}
          className="flex flex-row items-center text-white hover:bg-red-400 p-2 rounded transition-colors mt-2"
        >
          <FaAngleRight className="text-xl" />
          <span className="ml-3 text-lg">Graficas</span>
        </Link>
      </div>
    </nav>
  );
};
