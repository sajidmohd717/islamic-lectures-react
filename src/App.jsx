import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Body from "./pages/Body.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import { homeSeriesDict } from "./data/homeData.js"

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Body displayDict = {homeSeriesDict} />}/>
    //   <Route path="/tafsir" element={<Tafsir />}/>
    // </Routes>
    <>
      <Body all = {homeSeriesDict} />
    </>
  );
}

export default App;
