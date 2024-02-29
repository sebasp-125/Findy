import React from 'react';
import "./styleParts/Footer.css"
import { Navigate, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer>
            <span onClick={() => navigate('/Home')}>
                <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709072029/workshop/Vector_2_xjlrag.png" alt='Img' />
                </div>
            </span>
            <span onClick={() => navigate('/Busqueda')}>
                <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709072453/workshop/Vector_3_bcvtu9.png" alt='Img' />
                </div>
            </span>
            <span onClick={() => navigate('/NewPublish')}>
                <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709072583/workshop/Vector_4_dyqict.png" alt='Img'/>
                </div>
            </span>
            <span onClick={() => navigate('/Notificaciones')}>
                <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709072480/workshop/Group_24_zivim7.png" alt='Img'/>
                </div>
            </span>
            <span onClick={() => navigate('/Perfil')}>
                <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709072539/workshop/Ellipse_13_uain7y.png" alt='Img'/>
                </div>
            </span>
            <span onClick={() => navigate('/Chat')}>
                <div>
                    <img src="https://i.pravatar.cc/150?u=hola" alt='Img'/>
                </div>
            </span>
        </footer>
    );
};

export default Footer;