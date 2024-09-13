import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Personas from './pages/Personas';
import NoPage from './pages/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Inicio />} />
      <Route path='/Inicio' element={<Inicio />} />
      <Route path='/Personas' element={<Personas />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);