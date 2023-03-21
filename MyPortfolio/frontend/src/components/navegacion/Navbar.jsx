import { Link, useNavigate } from "react-router-dom";

import Estilo from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className={Estilo.ContenedorHeader}>
      <nav className={Estilo.ContenedorNavbar}>
        <Link to="/">
          {" "}
          <span className={Estilo.Titulo}>
          <b>F</b>ederico<b>C</b>id
          </span>
        </Link>
        <div className={Estilo.MenuItems}>
      
            <button className={Estilo.MenuItem} onClick={()=>navigate("/contact")}>Contact</button>
      
          
            <button className={Estilo.MenuItem} onClick={()=>navigate("/proyects")}>Proyect's</button>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
