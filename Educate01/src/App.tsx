import { BrowserRouter, Routes, Route } from "react-router";
import ReactDom from "react-dom/client";
import React from "react";

import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
    </Routes>
  );
}

export default App;
