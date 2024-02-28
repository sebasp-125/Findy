import React from 'react'
import "../styles/Notifi.css"
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from './partes/Footer';

export default function Notifi() {
  return (
    <div>
        <h1>Notificaciones</h1>
        <Footer />
    </div>
  )
}
