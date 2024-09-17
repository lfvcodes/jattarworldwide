import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Inicio />} />
      <Route path='/Inicio' element={<Inicio />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Contacto' element={<Contact />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/AgentLogin' element={<Login />} />
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);