import React from 'react'
import Card from '../UI/Card.jsx'


const Developer = ({image, name, job, socials}) => {
  return (
    <Card className='developer'>
        <div className='developer__img'>
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className='developer__socials'>
            {
                socials.map(({icon, link}, index) =>{
                    return <a key={index} href={link} target="_blank" rel='noreferrer noopener'>{icon}</a>
                })
            }
        </div>

    </Card>
  )
}

export default Developer