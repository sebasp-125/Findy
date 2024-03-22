import React, { useState } from 'react';
import Footer from './partes/Footer';
import '../styles/Chat.css';

export default function Chat() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebarVisibility = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleChatClick = () => {
        // Cambia el estado de sidebarVisible al contrario de su valor actual
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div>
            <button className="toggle-btn" onClick={toggleSidebarVisibility}>
                Cerrar
            </button>
            {sidebarVisible && (
                <div className="sidebar">
                    <ul className="menu">
                        <div className='Item_Chat' onClick={handleChatClick}>
                            <img src="https://i.pravatar.cc/150?u=sdf" alt="" />
                            <h2>Maria Antonieta de las Nieves</h2>
                            <p>Oye, Recuerda que debes de ir a cocinar...</p>
                        </div>
                        <div className='Item_Chat' onClick={handleChatClick}>
                            <img src="https://i.pravatar.cc/150?u=dsdas" alt="" />
                            <h2>Maria Antonieta de las Nieves</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur ....</p>
                        </div>
                        <div className='Item_Chat' onClick={handleChatClick}>
                            <img src="https://i.pravatar.cc/150?u=fdsad" alt="" />
                            <h2>Maria Antonieta de las Nieves</h2>
                            <p>Oye, Recuerda que debes de ir a cocinar...</p>
                        </div>
                    </ul>
                </div>
            )}
            <div>
                <nav>
                    <ol>
                        <li>Maria Antonieta de las Nieves</li>
                    </ol>
                </nav>
            </div>
            <Footer />
        </div>
    );
}
