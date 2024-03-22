import React, { useEffect, useState } from 'react';
import Footer from './partes/Footer';
import '../styles/Chat.css';
import { useDispatch } from 'react-redux';
import { actionFindChatAsync } from '../redux/Actions/ActionsChat';
import { actionListPublicationsAsync } from '../redux/Actions/ActionPublication';

export default function Chat() {

    interface Publication {
        ActionsPublication: string,
        Media: string,
        Description: string
    }

    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [CNew_Chat, setCNew_Chat] = useState([])
    const [Datos, SetDatos] = useState<Publication[]>([]);
    const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
    const [message, setMessage] = useState<string>('');
    const dispatch: any = useDispatch();

    const toggleSidebarVisibility = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleChatClick = (publication: Publication) => {
        setSelectedPublication(publication);
        setSidebarVisible(false);
    };

    const sendMessage = () => {
        // Aquí puedes implementar la lógica para enviar el mensaje
        console.log('Mensaje enviado:', message);
        setMessage('');
    };

    useEffect(() => {
        const RecuperaritionChat = async () => {
            const VisebleChat = await dispatch(actionFindChatAsync());
            setCNew_Chat(VisebleChat);
        };
        RecuperaritionChat()
    }, []);

    useEffect(() => {
        const RecuperarDatosPublications = async () => {
            const recuperacionPublication = await dispatch(actionListPublicationsAsync());
            SetDatos(recuperacionPublication);
        };
        RecuperarDatosPublications();
    }, []);

    return (
        <div>
            <button className="toggle-btn" onClick={toggleSidebarVisibility}>
                Cerrar
            </button>
            {sidebarVisible && (
                <div className="sidebar">
                    <ul className="menu">
                        {Datos.map((DatosMap, index) => (
                            <div className='Item_Chat' key={index} onClick={() => handleChatClick(DatosMap)}>
                                <img src={DatosMap.Media} alt="IMAGEN DEL CHAT" />
                                <h1>{DatosMap.ActionsPublication}</h1>
                                <p>{DatosMap.Description}</p>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
            {selectedPublication && (
                <div className="chat-container">
                    <h2>Chat con {selectedPublication.ActionsPublication}</h2>
                    <div className="chat-messages">
                    </div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe tu mensaje..."
                    />
                    <button onClick={sendMessage}>Enviar</button>
                </div>
            )}
            <Footer />
        </div>
    );
}
