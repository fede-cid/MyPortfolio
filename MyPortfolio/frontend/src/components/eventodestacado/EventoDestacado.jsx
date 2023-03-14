import { useContext } from 'react';

import StylesEvent from './EventoDestacado.module.css';

import ContenedorImagen from './ContenedorImagen';
import ContenedorInfo from './ContenedorInfo';

import ProductoContext from '../../context/producto/ProductoContext';

const EventoDestacado = () => {


    const producto= {
      id: 1,
      nombre: "Ask for your budget",
      explore: "Portfolio",
      descripcion: "Hire my services as a Full Stack Developer.",
      descripcion2: "These are my some of my works"
    }
  

  return (  
    <div className={StylesEvent.Contenedor}>
      <div className={StylesEvent.ContenedorDestacado}>

        <div className={StylesEvent.ContenedorDetalles}>
          <ContenedorImagen producto={producto}/>
          <ContenedorInfo producto={producto}/>
        </div>
      </div>
    </div>
  );
}
 
export default EventoDestacado;