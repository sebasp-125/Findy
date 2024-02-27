import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './partes/Footer';

export default function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Home</h1>
        <Footer />
    </div>
  )
}
