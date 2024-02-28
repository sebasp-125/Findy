import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Register</h1>
        <button onClick={()=>navigate('/')}>Login</button>
    </div>
  )
}
