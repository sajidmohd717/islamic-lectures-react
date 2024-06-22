import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Intro from "./pages/Home/intro/Intro.jsx";
import Signup from "./pages/Signup/Signup.jsx";

import Home from "./pages/Home/Home.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import { databaseDict } from "./data/data.js"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home all = {databaseDict} />}></Route>
      <Route path="/signup" element={<Signup />} ></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
