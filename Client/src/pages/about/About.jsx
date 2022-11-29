import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/about-us-1.jpg'
import StoryImage from '../../images/story-image.jpg'
import WhyImage from '../../images/why-about.jpg'

const About = () => {
  return (
    <>
      <Header title="Sobre nosotros" image={HeaderImage}>
        Somos una compañia que tiene como proposito ayudar a todos los estudiantes a alcanzar sus sueños laborales.
      </Header>

      <section className='about__story'>
        <div className='container about__story-container'>
          <div className='about__section-image'>
            <img src={StoryImage} alt="story"/>
          </div>
          <div className='about__section-content'>
            <h1>Nuestra visión</h1>
            <p>
            La salida al campo laboral por parte de los estudiantes universitarios siempre es
            muy difícil y complicada, se entra a un mundo nuevo para aventurarse y medir las
            capacidades que se han adquirido a lo largo de su carrera para superarse tanto personalmente como profesionalmente.
            </p>
            <br></br>
            <p> El objetivo principal es ayudar a los jóvenes universitarios a una inserción natural y efectiva al ambiente laboral para el cual se estén formando. Ayudarlos a ser mejores profesionales y que su experencia crezca sin ninguna excusa.</p> 
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className='container about__mission-container'>
          <div className='about__section-image'>
            <img src={WhyImage} alt="Why"/>
          </div>
          <div className='about__section-content'>
            <h1>¿Por qué?</h1>
            <p>Todo comienza cuando pensamos en uno de los principales problemas por los que
            atraviesa nuestra sociedad y que ha venido ocurriendo durante muchos años lo cual
            conocemos como la falta de oportunidades laborales en los jóvenes. Muchos
            empleos de hoy en día buscan personas que tengan años de experiencia lo cual,
            para un joven que recién termina los estudios es imposible poder aplicar y es donde
            optan por buscar cualquier fuente de ingresos buscando trabajos donde no pueden
            desarrollarse al máximo.
            </p>
            <br></br>
            <p>
            La idea principal revolucionar el papel que los jóvenes tienen dentro del mundo
            laboral dándoles asi una ventana más de posibilidades. Nosotros como estudiantes
            sabemos lo duro que es pasar por esta etapa en donde son horas de desvelos,
            estrés y cansancio y por ello es que también nos imaginamos lo frustrante que ha
            de ser no poder encontrar en donde poner a prueba todo el conocimiento que se ha adquirido a traves de los años.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About