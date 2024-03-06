import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Button from '../pages/Button.jsx';
import Filter from '../pages/Filter.jsx';
import Af from '../pages/Af.jsx';
import CURP from '../pages/CURP.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/NULL" element={<Button/>}/>
        <Route path="/Filter" element={<Filter/>}/>
        <Route path="/Af" element={<Af/>}/>
        <Route path="/CURP" element={<CURP/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

