import React from 'react'
import './developers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/developers.jpg'
import {developers} from '../../data.js'
import {BsInstagram} from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import Developer from '../../components/Developer.jsx'

const Developers = () => {
  return (
    <>
      <Header title="Nuestros Desarrolladores" image={HeaderImage}>
        Presentamos a nuestro equipo de programadores que hacen esta idea realidad.
      </Header>

      <section className='developers'>
        <div className='container developers__container'>
          {
            developers.map(({id, image, name, job, socials})=> {
              return <Developer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <AiOutlineTwitter/>, link: socials[1]},
                  {icon: <FaFacebook/>, link: socials[2]},
                  {icon: <FaLinkedin/>, link: socials[3]}
                  
                ]
              }/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Developers