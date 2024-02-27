import React from 'react';
import './App.css';
import { Login } from './componentes/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './componentes/Register';
import Home from './componentes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
