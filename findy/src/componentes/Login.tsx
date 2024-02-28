import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Login</h1>
        <button onClick={() => navigate('/Home')}>Log</button>
        <h3>o</h3>
        <button onClick={() => navigate('/Register')}>Register</button>
    </div>
  )
}
