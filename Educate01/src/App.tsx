import { Routes, Route } from "react-router";

import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
