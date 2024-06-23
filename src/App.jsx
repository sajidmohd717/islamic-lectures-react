import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Intro from "./pages/Home/intro/Intro.jsx";
import Signup from "./pages/Signup/Signup.jsx";

import Home from "./pages/Home/Home.jsx";
import Tafsir from "./pages/Tafsir.jsx"

import Login from "./pages/Login/Login.jsx"

import { databaseDict } from "./data/data.js"

import Nav from './Components/navigation/Nav.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home all = {databaseDict} />}></Route>
      <Route path="/signup" element={<Signup />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
