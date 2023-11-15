import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul>
          <li><a href='https://www.instagram.com/juniiorcassiiano/'><FaInstagram size={30}/></a></li>
          <li><a href='https://github.com/VagnerCassiano'><FaGithub size={30}/></a></li>
          <li><a href='https://www.linkedin.com/in/vagner-cassianojunior/'><FaLinkedin size={30}/></a></li>
        </ul>
        <p>junincassiano@gmail.com</p>
        <p>Vagner Cassiano © 2023</p>
    </div>
  )
}

export default Footer