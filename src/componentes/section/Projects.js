import React from 'react';
import ButtonB from '../elements/ButtonB';
import styles from './Projects.module.css';
import Card from '../elements/Card';
import landingpagearquitetura from '../../image/projects/landingpagearquitetura.svg';
import cadastroproduto from '../../image/projects/cadastroproduto.svg'

const Projects = () => {
  return (
    <div className={styles.projects} id='Projects'>
        <h1> Projetos </h1>
        <Card
          img={landingpagearquitetura}
          title='Landing Page Arquitetura'
          tech='HTML, CSS e JS'
          description='Desenvolvimento de uma Landing Page para o desafio 1 da DNC'
          repo='https://github.com/VagnerCassiano/Landing-Page-Arquitetura'
          site='https://landingpage-arquitetura-desafio1.netlify.app/'
        />
        <Card
          img={cadastroproduto}
          title='Cadastro de Produtos'
          tech='HTML, CSS e JS'
          description='Desenvolvimento de uma Landing Page para cadastro de produtos do curso da DNC'
          repo='https://github.com/VagnerCassiano/Cadastro_Produto'
          site=''
        />
        <ButtonB text='Acesse meu repositório' link='https://github.com/VagnerCassiano?tab=repositories' />
    </div>
  )
}



export default Projects