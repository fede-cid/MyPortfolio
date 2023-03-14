import React from "react";
import Style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookSquare,FaInstagram, FaTwitter  } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={Style.mainFooter}>
      <h1 className={Style.Titulo}>
      <b>F</b>ederico<b>C</b>id
      </h1>
      <div>
        <motion.ul className={Style.MenuItem}>
          <li>
            <NavLink to="/about-us">ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/Help">HELP</NavLink>
          </li>
        </motion.ul>
      </div>
      <div >

      <a> <FaFacebookSquare size={20}/> </a>
      <a> <FaInstagram size={20}/> </a>
      <a> <FaTwitter size={20}/> </a>

      </div>
    </footer>
  );
}

export default Footer;
