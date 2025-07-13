import { Outlet } from "react-router-dom";
import { FaApple } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../store/store";
import { toggleSideBar } from "../store/sidabarSlice";
import { SideBar } from "./SideBar";

export const Layout = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.value);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-14 bg-blue-300 flex flex-row items-center px-4 relative z-10">
        <button
          className="text-white hover:bg-blue-500 p-2 rounded transition-colors"
          onClick={() => dispatch(toggleSideBar())}
        >
          <FaApple className="text-white text-4xl" />
        </button>
        <h1 className="text-2xl text-white absolute left-1/2 -translate-x-1/2">
          Educate Dashboard
        </h1>
      </header>

      <div className="flex flex-1">
        <SideBar />
        <main
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "ml-[200px]" : "ml-0"
          }`}
        >
          <section className="h-full bg-gray-200 p-4">
            <Outlet />
          </section>

          <footer className="h-14 bg-amber-200 flex justify-center items-center text-amber-50">
            holas
          </footer>
        </main>
      </div>
    </div>
  );
};
