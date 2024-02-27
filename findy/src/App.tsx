import React from 'react';
import './App.css';
import { Login } from './componentes/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from './componentes/Register';
import Home from './componentes/Home';
import Busqueda from './componentes/Busqueda';
import Notifi from './componentes/Notifi';
import Perfil from './componentes/Perfil';
import NewPublish from './componentes/NewPublish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Busqueda' element={<Busqueda />} />
        <Route path='/Notificaciones' element={<Notifi />} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='NewPublish' element={<NewPublish />} />
      </Routes>
    </Router>
  );
}

export default App;
