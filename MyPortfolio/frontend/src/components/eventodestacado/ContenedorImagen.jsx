import { useEffect } from 'react';

import StylesEvent from './EventoDestacado.module.css';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const ContenedorImagen = ({producto}) => {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {

    if(inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      })
    } 
    if(!inView) {
      animation.start({
        opacity: 0,
        x: -300,
        transition: {
          duration: 1
        }
      })
    }

  }, [inView])

  if (Object.entries(producto).length === 0) {
    return null;
  }

  return (  
      <motion.div 
      className={StylesEvent.ContenedorInfo}
      ref={ref}
      initial={{
        opacity: 0,
        x: 500,
      }}
      animate={animation}
    >
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <div>
        <a

          className={`btnicono`}
          href='/contact'>
          <span>Contact</span>
          </a>
      </div>
    </motion.div>
  );
}
 
export default ContenedorImagen;