import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Body from "./pages/Body.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import { databaseDict } from "./data/data.js"

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Body displayDict = {homeSeriesDict} />}/>
    //   <Route path="/tafsir" element={<Tafsir />}/>
    // </Routes>
    <>
      <Body all = {databaseDict} />
    </>
  );
}

export default App;
