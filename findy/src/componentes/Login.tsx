import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { actionGoogle } from '../redux/actionsLogin';

export const Login = () => {
    const navigate = useNavigate();
    const dispatch: any = useDispatch();

    return (
        <div className='Div_LOGIN'>
            <label className='Label_LOGIN'>Login</label>
            <input className='Input_LOGIN' type="text" placeholder='Ingrese Nombre Usuarios' />
            <input className='Input_LOGIN' type="password" placeholder="Ingrese su Contraseña" />
            <div className='Content'>
                <button className='Button_LOGIN' onClick={() => navigate('/Home')}>Log</button>
                <h3 className='O_LOGIN'>o</h3>
                <button className='Button_LOGIN' onClick={() => navigate('/Register')}>Register</button>
                <button onClick={() => dispatch(actionGoogle())} className='Button_LOGIN'>
                    Iniciar con Google
                </button>
            </div>

        </div>
    );
};
