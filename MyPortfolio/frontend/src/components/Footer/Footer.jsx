import React from "react";
import Style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin,FaInstagram, FaGithub, FaGoogle  } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={Style.mainFooter}>
      <h1 className={Style.Titulo}>
      <b>F</b>ederico<b>C</b>id
      </h1>
      <div>
        <motion.ul className={Style.MenuItem}>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </motion.ul>
      </div>
      <div >

      <a href="https://www.instagram.com/fefecid/"target='_blank'> <FaInstagram size={20}/> </a>
      <a href="https://github.com/fede-cid" target='_blank'> <FaGithub size={20}/> </a>
      <a href="https://www.linkedin.com/in/federico-cid-519421188/" target='_blank'> <FaLinkedin size={20}/> </a>
      <a href="mailto:fede.cid.96@gmail.com" target='_blank'> <FaGoogle size={20}/> </a>

      </div>
    </footer>
  );
}

export default Footer;
