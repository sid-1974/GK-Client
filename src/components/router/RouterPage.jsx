import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/dashboard/Home';
import About from '../../pages/dashboard/About';
import Service from '../../pages/dashboard/Service';
import Contatct from '../../pages/dashboard/Contatct';
import Privacy from '../../pages/dashboard/Privacy';
import Signup from '../../pages/Auth/Signup';
import Login from '../../pages/Auth/Login';
import Forgot from '../../pages/Auth/Forgot';


function RouterPage() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contatct/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={  <Login/>} />
      <Route path="/forgot-password" element={<Forgot/>} />
    </Routes>
  )
}

export default RouterPage;
