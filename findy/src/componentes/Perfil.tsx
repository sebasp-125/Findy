import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Perfil.css';
import Footer from './partes/Footer';

export default function Perfil() {
  return (
    <div>
      <h1>Perfil</h1>
      <div>
        <div className="profile-container">
          <div className="profile-header">
            <img src="https://res.cloudinary.com/dwpzqxijx/image/upload/v1709070674/AppPerfil/jennie-blackpink-uhdpaper.com-hd-4_1_s6vjyi.png" alt="Profile Picture" className="profile-image" />
            <div className="profile-name">Jennie Kim</div>
          </div>
          <div className="profile-stats">
            <div className="stat">
              <div className="stat-value">10.7 M</div>
              <div className="stat-value">Followers</div>
            </div>
            <div className="stat">
              <div className="stat-label">J. Hello Guys</div>
              <div className="stat-label">Follow me and like my post</div>
            </div>
            <div className="stat">
              <div className="stat-value">108.3 M</div>
              <div className="stat-value">Likes</div>
            </div>
          </div>
          <div className="buttons-container">
            <button className="button">Follow</button>
            <button className="button">Messages</button>
          </div>
        </div>
        <div className="menu-profile">
          <button className="photos">Photos</button>
          <button className="videos">Videos</button>
          <button className="album">Album</button>
          <button className="tag">Tag</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
