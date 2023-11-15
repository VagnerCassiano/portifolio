import React from 'react';
import styles from './Navbar.module.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <ul>
          <li><Nav.Link href='Presentation'>Apresentação</Nav.Link></li>
          <li><Nav.Link href='Skills'>Habilidades</Nav.Link></li>
          <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        </ul>
        <ul>
          <li><a href='https://www.instagram.com/juniiorcassiiano/'><FaInstagram size={30}/></a></li>
          <li><a href='https://github.com/VagnerCassiano'><FaGithub size={30}/></a></li>
          <li><a href='https://www.linkedin.com/in/vagner-cassianojunior/'><FaLinkedin size={30}/></a></li>
        </ul>
    </div>
  )
}

export default Navbar