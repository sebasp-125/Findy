import React from 'react'
import "../styles/Busqueda.css"
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './partes/Footer';

export default function Busqueda() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Busqueda</h1>
        <Footer />
    </div>
  )
}
