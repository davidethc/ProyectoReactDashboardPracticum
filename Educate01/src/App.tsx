import { BrowserRouter, Routes, Route } from "react-router";
import ReactDom from "react-dom/client";
import React from "react";

import Home from "./components/Home";

function App() {
  return (
    <div className="bg-green-400 min-h-screen">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<h2>About Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;
