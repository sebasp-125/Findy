import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { actionGoogle } from '../redux/actionsLogin';
import '../styles/Register.css';
import { useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className='Div_LOGIN'>
        <label className='Label_LOGIN'>Register</label>
        <input className='Input_LOGIN' type="text" placeholder='Ingrese Nombre Usuarios' />
        <input className='Input_LOGIN' type="password" placeholder="Ingrese su Contraseña" />
        <div className='ContentBTN_LOGIN'>
          <button className='Button_LOGIN'>Register</button>
          <button onClick={() => dispatch(actionGoogle())} className='Button_LOGIN'>
            Iniciar con Google
          </button>
        </div>

      </div>
    </div>
  )
}


//----Importante!
//Falta colocar el navegate en los btn para cuando el usuario le de en "register", Lo mande al Home ya previamente registrado.

//El Iniciador de Google Ya esta Listo.