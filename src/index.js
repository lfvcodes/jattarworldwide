import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Agents from './components/dashboard/Agents';
import AgentCall from './components/dashboard/AgentCall';
import CallSection from './components/dashboard/CallSection';
import Calls from './components/dashboard/Calls';

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
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Agents' element={<Agents />} />
      <Route path='/Agents/Calls' element={<AgentCall />} />
      <Route path='/Calls' element={<CallSection />} />
      <Route path='/Calls/Income' element={<Calls />} />
      <Route path='/Calls/Answered' element={<Calls />} />
      <Route path='/Calls/Waiting' element={<Calls />} />
      <Route path='/Calls/Abandoned' element={<Calls />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);