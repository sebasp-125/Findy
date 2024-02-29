import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Footer from './partes/Footer';

export default function Home() {
  const navigate = useNavigate();
  return (
    //dejar este div quiero para que no se dañe na xd
    <div>
        {/* si algo crear un div aqui y meter todo menos el footer, igual en todas
        las demas interfaces */}
        <div className='contPrinHome'>
          {/*contenedor para like, loguito y esas cosas*/}
          <div className='contLog'>
            <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155989/Cosiaco/LOGOLOGO_3_1_eqqgah.png" alt="log" />
            <div className='contLClog'>
              <img className='imgLClog' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155914/Cosiaco/Vector_borys0_kj6x4q.png" alt="likelog" />
              <img className='imgLClog' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155916/Cosiaco/Vector_1_vxjbwp_xhe7dn.png" onClick={() => navigate('/Chat')} alt="chatlog" />
            </div>
          </div>
          {/*contenedor para storys*/}
          <div className='contStorys'>
            <div className='circulitoStory'>
              <img className='imgLClog imgSt' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709159544/Cosiaco/Group_29_b0x0th.png" alt="iCS" />
              <p className='nameSt'>Your Story</p>
            </div>
            {/*eliminar los siguientes contenedores de prueba y realizar el mapeo con uno solo para aplicar los estilos c: */}
            <div className='circulitoStory'>
              <img className='imgLClog imgSt' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157723/Cosiaco/Group_2_e26s2i_d5wryo.png" alt="iCS" />
              <p className='nameSt'>Jennie Kim</p>
            </div>
            <div className='circulitoStory'>
              <img className='imgLClog imgSt' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157721/Cosiaco/Group_3_ahsaam_wusj4u.png" alt="iCS" />
              <p className='nameSt'>Roseanne Park</p>
            </div>
            <div className='circulitoStory'>
              <img className='imgLClog imgSt' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157723/Cosiaco/Group_1_uxwjt9_po9zf4.png" alt="iCS" />
              <p className='nameSt'>kim Ji-soo</p>
            </div>
            <div className='circulitoStory'>
              <img className='imgLClog imgSt' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157722/Cosiaco/Group_4_wvkmbt_mujdc0.png" alt="iCS" />
              <p className='nameSt'>Lalisa Manoban</p>
            </div>
            {/*aqui terminan las historias*/}
          </div>

          {/*contenedor para el feed*/}
          <div>
            {/*contenedor publicacion*/}
            <div className='contPublicIni'>
              {/*contenedor del nombre e imagen de usuario*/}
              <div className='contNameImgUPublic'>
                <img className='imgUPublic' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157723/Cosiaco/Group_2_e26s2i_d5wryo.png" alt="" />
                <h3 className='nameUPublic'>Jennie Kim</h3>
              </div>
              {/*imagen de la publicacion*/}
              <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157528/Cosiaco/Group_11_du3hyj_hlzn8q.png" alt="" />
              {/*seccion de iconos y guardado*/}
              <div className='contIconosPublic'>
                {/*iconos normales*/}
                <div className='contIconos'>
                  {/*icono like*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155914/Cosiaco/Vector_borys0_kj6x4q.png" alt="" />
                    <p className='nameSt'>253</p>
                  </div>
                  {/*icono coment*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155916/Cosiaco/Vector_1_w8alyp_gn0ymc.png" alt="" />
                    <p className='nameSt'>112</p>
                  </div>
                  {/*icono compartir*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155914/Cosiaco/Vector_qaipdy_pcawai.png" alt="" />
                    <p className='nameSt'>187</p>
                  </div>
                </div>
                {/*guardar*/}
                <div>
                  <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709162721/Cosiaco/Vector_5_p18mr3.png" alt="" />
                </div>
              </div>
              {/*descripcion*/}
              <div className="titulo-parrafo">
                <h3>Jennie Kim  </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Facilisi ullamcorper aliquam augue fermentum, vel, risus, adipiscing.
                  Tellus vestibulum magnis ut elit, vitae mattis sapien. Laoreet nam....</p>
              </div>
            </div>
            {/*aqui termina el contenedor de una publicacion*/}
            <div>
              {/*contenedor del nombre e imagen de usuario*/}
              <div className='contNameImgUPublic'>
                <img className='imgUPublic' src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157723/Cosiaco/Group_2_e26s2i_d5wryo.png" alt="" />
                <h3 className='nameUPublic'>Jennie Kim</h3>
              </div>
              {/*imagen de la publicacion*/}
              <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709157528/Cosiaco/Group_11_du3hyj_hlzn8q.png" alt="" />
              {/*seccion de iconos y guardado*/}
              <div className='contIconosPublic'>
                {/*iconos normales*/}
                <div className='contIconos'>
                  {/*icono like*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155914/Cosiaco/Vector_borys0_kj6x4q.png" alt="" />
                    <p className='nameSt'>253</p>
                  </div>
                  {/*icono coment*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155916/Cosiaco/Vector_1_w8alyp_gn0ymc.png" alt="" />
                    <p className='nameSt'>112</p>
                  </div>
                  {/*icono compartir*/}
                  <div>
                    <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709155914/Cosiaco/Vector_qaipdy_pcawai.png" alt="" />
                    <p className='nameSt'>187</p>
                  </div>
                </div>
                {/*guardar*/}
                <div>
                  <img src="https://res.cloudinary.com/dtmapxnao/image/upload/v1709162721/Cosiaco/Vector_5_p18mr3.png" alt="" />
                </div>
              </div>
              {/*descripcion*/}
              <div className="titulo-parrafo">
                <h3>Jennie Kim  </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Facilisi ullamcorper aliquam augue fermentum, vel, risus, adipiscing.
                  Tellus vestibulum magnis ut elit, vitae mattis sapien. Laoreet nam....</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}