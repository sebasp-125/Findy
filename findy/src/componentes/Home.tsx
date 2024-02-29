import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './partes/Footer';

export default function Home() {
  return (
    //dejar este div quiero para que no se dañe na xd
    <div>
        {/* si algo crear un div aqui y meter todo menos el footer, igual en todas
        las demas interfaces */}
        <h1>Home</h1>
        <Footer />
    </div>
  )
}
