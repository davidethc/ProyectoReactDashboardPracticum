import { FaAngleRight, FaApple } from "react-icons/fa";
import { Link } from "react-router";

export const SideBar = () => {
  return (
    <nav>
      <div>
        <FaApple></FaApple>
      </div>
      <div>
        <Link to={"#"} className="flex flex-row mt-5">
          <FaAngleRight className="text-2xl" />
          <span className="ml-3 text-xl">Sistema</span>
        </Link>
        <Link to={"#"} className="flex flex-row mt-5">
          <FaAngleRight className="text-2xl" />
          <span className="ml-3 text-xl">Graficas</span>
        </Link>
      </div>
    </nav>
  );
};
