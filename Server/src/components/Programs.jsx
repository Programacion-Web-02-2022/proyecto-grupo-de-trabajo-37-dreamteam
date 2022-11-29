
import React from 'react'
import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead.jsx'
import {programs} from '../data.js'
import Card from '../UI/Card.jsx'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'

const Programs = () => {
  return (
    <section className='programs'>
        <div className='container programs__container'>
            <SectionHead icon={<FaCrown/>} title="Nuestro Servicios"/>

            <div className='programs__wrapper'>
            {
                programs.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <span>
                                {icon}
                            </span>
                            <h4>{title}</h4>
                            <small>{info}</small>
    
                        </Card>
                    )
                })
            }
            </div>
        </div>

    </section>
  )
}

export default Programs