import React from 'react'
import './contact.css'
import Header from '../../components/Header.jsx'
import HeaderImage from '../../images/contact.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Contáctate con nosotros" image={HeaderImage}>
        Aqui puedes encontrar las manera más eficientes de comunicarte con nuestro equipo.
      </Header>
      <section className='contact'>
        <div className='container contact__container'>
          <div className='contact__wrapper'>
            <a href="mailto:00063121@uca.edu.sv" target="_blank" rel="noreferrer noopener"><MdEmail /></a>

            <a href="" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>

            <a href="https://wa.me/+50378801505" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact