import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Intro from "./Intro.jsx";

import Body from "./pages/Home.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import { databaseDict } from "./data/data.js"

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Body displayDict = {homeSeriesDict} />}/>
    //   <Route path="/tafsir" element={<Tafsir />}/>
    // </Routes>
    <>
      <Intro />
      <Body all = {databaseDict} />
    </>
  );
}

export default App;
