import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/Loco-UCA.png'

const Header = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#VidaEstudiantil</h4>
          <h1>¡Unete a nuestro programa!</h1>
          <p>Encuentra un nuevo mundo de oportunidades laborales de acorde a tus habilidades.</p>
          <br></br>
          <p>¡La experencia se consigue acá!</p>
          <Link to="/registrar" className='btn lg'>Registrarse</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'>

          </div>
          <div className='main__header-image'>
            <img src={Image} alt='Logo Uca' />
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header