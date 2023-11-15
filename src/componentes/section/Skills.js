import React from 'react';
import styles from './Skills.module.css';
import javascript from '../../image/skills/javascript.svg';
import nodejs from '../../image/skills/nodejs.svg';
import html from '../../image/skills/html.svg';
import css from '../../image/skills/css.svg';
import react from '../../image/skills/react.svg';


const Skills = () => {
  return (
    <div className={styles.skill} id='Skills'>
        <h1> Habilidades </h1>
        <p>
          Conheça um pouco das minahs principais habilidades e conhecimentos.
        </p>
        <div>
        <ul>
          <img src={javascript} alt='javascript' />
          <img src={nodejs} alt='nodejs' />
          <img src={html} alt='html' />
          <img src={css} alt='css' />
          <img src={react} alt='react' />
        </ul>
        </div>
    </div>
  )
}

export default Skills