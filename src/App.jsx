import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Tafsir from "./pages/Tafsir.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/tafsir" element={<Tafsir />}/>
    </Routes>
    // <>
    //   <Home />
    // </>
  );
}

export default App;
