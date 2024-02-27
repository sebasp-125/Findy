import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Perfil.css';
import Footer from './partes/Footer';

export default function Perfil() {
  return (
    <div>
        <h1>Perfil</h1>
        <Footer />
    </div>
  )
}
