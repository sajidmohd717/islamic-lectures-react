import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Intro from "./pages/Home/intro/Intro.jsx";

import Home from "./pages/Home/Home.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import { databaseDict } from "./data/data.js"

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Body displayDict = {homeSeriesDict} />}/>
    //   <Route path="/tafsir" element={<Tafsir />}/>
    // </Routes>
    <>
      <Home all = {databaseDict} />
    </>
  );
}

export default App;
