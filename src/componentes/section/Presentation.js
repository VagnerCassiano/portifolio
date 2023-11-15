import React from 'react';
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';

const Presentation = () => {
  return (
    <div className={styles.presentation} id='Presentation'>
        <h4><strong> Bem-vindo ao meu Portifólio </strong></h4>
        <h1> Olá, eu sou Vagner Cassiano </h1>
        <p>
          Sou um profissional com formação em Direito e especialização em Privacidade e Proteção de Dados. <br/>
          Estou em transição para a área de Desenvolvimento de Software, unindo minha base jurídica com <br/> 
          a paixão pela tecnologia. Meu objetivo é criar soluções inovadoras que integrem privacidade e <br/>
          segurança de dados com o desenvolvimento de software. Se você procura alguém com essa <br/>
          combinação única de habilidades para sua equipe, estou à disposição.
        </p>
        <ButtonA link='https://github.com/VagnerCassiano' text='Conecte-se comigo!' />
    </div>
  )
}

export default Presentation