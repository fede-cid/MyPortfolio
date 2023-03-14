import Estilo from "./Banner.module.css";

const Banner = () => {
  return (
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
  );
};

export default Banner;
