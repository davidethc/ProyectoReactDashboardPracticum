import { FaAlignJustify } from "react-icons/fa";

import { openSideBar } from "../store/sidabarSlice";
import { SideBar } from "../components/SideBar";
import { useAppDispatch } from "../store/store";

export default function Home() {
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-blue-300 flex flex-row items-center px-4 relative">
          <button
            className="text-white hover:bg-blue-500 p-2 rounded transition-colors"
            onClick={() => dispatch(openSideBar!())}
          >
            <FaAlignJustify size={24} />
          </button>
          <h1 className="text-2xl text-white absolute left-1/2 -translate-x-1/2">
            Educate Dashboard
          </h1>
        </header>

        <main className="flex-1 bg-gray-100">
          <section className="h-full bg-gray-200 p-4">main</section>
        </main>

        <footer className="h-14 bg-amber-200 flex justify-center items-center text-amber-50">
          holas
        </footer>
      </div>
    </div>
  );
}
