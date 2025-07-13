import { Routes, Route } from "react-router-dom";

import { PorcentajeSentimientos } from "./pages/PorcentajeSentimientos";
import { TopAsignaturas } from "./pages/TopAsignaturas";
import { TopDocentes } from "./pages/TopDocentes";
import { Layout } from "./components/Layout";
import { Graficas } from "./pages/Graficas";
import { Sistema } from "./pages/Sistema";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Sistema />} />
          <Route path="sistema" element={<Sistema />} />
          <Route path="graficas" element={<Graficas />} />
          <Route path="graficas/asignaturas" element={<TopAsignaturas />} />
          <Route path="graficas/docentes" element={<TopDocentes />} />
          <Route
            path="graficas/porcentajes-sentimientos"
            element={<PorcentajeSentimientos />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
