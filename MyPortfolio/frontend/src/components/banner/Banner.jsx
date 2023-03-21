import Estilo from "./Banner.module.css";
import React from "react";
import EventoDestacado from '../eventodestacado/EventoDestacado'

const Banner = () => {
  return (
    <>
    <div className={Estilo.ContenedorHero}>
      <div className={Estilo.ContenedorTex}>
        <h2 className={Estilo.Text}>
          Welcome, I Am <h1 className={Estilo.Titulo}>
          <b>Federico Cid</b>
          </h1>
        </h2>
        <h2 className={Estilo.Text}>Front End Developer</h2>
      </div>
      <div className={Estilo.Me}></div>
    
    </div>
    <div className={Estilo.route}><EventoDestacado/></div>
    </>
  );
};

export default Banner;
