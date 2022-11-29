import {GiBookshelf} from 'react-icons/gi'
import { GiCutDiamond } from 'react-icons/gi'



export const links = [
    {
        name: "Inicio",
        path: '/'
    },
    {
        name: "Sobre nosotros",
        path: '/about'
    },
    {
        name: "Desarrolladores",
        path: '/developers'
    },

    {
        name: "Contáctanos",
        path: '/contact'
    },

    {
        name: "Iniciar Sesión",
        path: '/log-in'
    }
]



export const programs = [
    {
        id: 1,
        icon: <GiBookshelf/>,
        title: "Creación del curriculum",
        info: "Contamos con un sistema con el cual los estudiantes que no cuenten con la suficiente experiencia para la creación de un curriculum vitae cuenten con distintos formatos preestablecidos para guiarse.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <GiBookshelf/>,
        title: "Oportunidad de pasantías",
        info: "Los usuarios identificador como empresas cuentan con la posibilidad de convocar a pasantías a su empresa para evaluar las aptitudes de posibles nuevos empleados.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <GiBookshelf/>,
        title: "Comunicación y comunidad efectiva",
        info: "Nuestra comunidad ayuda a todos los jóvenes a identificarse en las áreas donde sus habilidades pueden desarrollarse de la mejor manera.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <GiBookshelf/>,
        title: "Solicitud de empleo directa",
        info: "Los usuarios identificador como empresas cuentan con la posibilidad de convocar a pasantías a su empresa para evaluar las aptitudes de posibles nuevos empleados.",
        path: "/programs/444"
    }
]





export const values = [
    {
        id: 1,
        icon: <GiCutDiamond />,
        title: "Igualdad",
        desc: "Reconocemos que todas las personas tienen el mismo derecho a emitir las mismas acciones laborales sin distinción alguna."
    },
    {
        id: 2,
        icon: <GiCutDiamond />,
        title: "Integridad",
        desc: "La honestidad es el primer paso para la confianza, por lo que todo el desarrollo de esta herramienta ha sido creada con el enfoque de ayudar a los estudiantes a desarrollarse en el ámbito laboral."
    },
    {
        id: 3,
        icon: <GiCutDiamond />,
        title: "Imparcialidad",
        desc: "Todos los usuarios son tratados con la misma equidad."
    },
    {
        id: 4,
        icon: <GiCutDiamond />,
        title: "Confianza",
        desc: "Queremos ser tu mano derecha en tus decisiones laborales durante tu recorrido estudiantil, la idea y la creación de esta página ha sido con ese único proposito."
    }
]







export const faqs = [
    {
        id: 1,
        question: "¿Necesito ser estudiante para poder registrarme?",
        answer: "Si. A diferencia de otras plataformas, nuestro equipo se ha enfocado en ayudar únicamente a los estudiantes universitarios de El Salvador ya que sabemos lo dificil que es conseguir experiencia laboral sin haberse graduado en este país."
    },
    {
        id: 2,
        question: "¿Recibo beneficios por ser estudiante de la UCA?",
        answer: "No. Todos los usuarios tienen las mismas opciones y limitaciones para poder usar ésta página web."
    },
    {
        id: 3,
        question: "¿Cuánto tengo que pagar para registrarme?",
        answer: "Nada de nada ($0.00). El registro es totalmente gratis."
    },
    {
        id: 4,
        question: "¿Qué universidades están disponibles para poder registarse?",
        answer: "Por el momento solamente registramos usuarios con el dominio @uca.edu.sv, próximamente esperamos ampliar nuestro entorno."
    },
    {
        id: 5,
        question: "Si soy estudiante de primer año, ¿Puedo registrarme?",
        answer: "Tenemos como enfoque principalmente a los universitarios de segundo año en adelante debido a que el primer año en una universidad suele ser de adaptación y la curva de aprendizaje sube por lo que preferimos mantener un ambiente de compromiso con nuestros usuarios."
    },
    {
        id: 6,
        question: "¿Debo ser de una carrera en específico?",
        answer: "¡No!. Nuestra página funciona para encontrar oportunidades laborales para todas las carreras."
    }
]





const Developer1 = require('./images/Mario.jpeg')
const Developer2 = require('./images/Xavier.jpeg')
const Developer3 = require('./images/Brandon.jpeg')


export const developers = [
    {
        id: 1,
        image: Developer1,
        name: 'Mario Umaña',
        job: 'Estudiante Ing. Informática',
        socials: ['https://www.instagram.com/mario_umaa/', 'https://twitter.com/_marioumaa', 'https://www.facebook.com/mariofrancisco.umana', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Developer2,
        name: 'Xavier Morán',
        job: 'Estudiante Ing. Informática',
        socials: ['https://www.instagram.com/xmoran_03/', 'https://twitter.com/xmoran3', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Developer3,
        name: 'Brandon Ascensio',
        job: 'Estudiante Ing. Informática',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://www.facebook.com/brandonjose.ascencio', 'https://linkedin.com/']
    }
]