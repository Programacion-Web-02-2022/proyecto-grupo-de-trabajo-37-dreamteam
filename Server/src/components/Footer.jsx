import { Link } from "react-router-dom"
import Logo from '../images/Logo1.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className="logo">
                    <img src={Logo} alt="Footer logo"/>
                </Link>
                <p>
                    Cumpliendo sueños
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin /></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebook /></a>                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></a>                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
                </div>

            </article>
            <article>
                <h4>Menú</h4>
                <Link to="/about">Sobre nosotros</Link>
                <Link to="/developers">Desarrolladores</Link>
                <Link to="/contact">Contacto</Link>
            </article>        
        </div>

        <div className="footer__copyright">
            <small>2022 Dream Team 37 &copy; All Rights Reserverd</small>
        </div>
    </footer>
  )
}

export default Footer