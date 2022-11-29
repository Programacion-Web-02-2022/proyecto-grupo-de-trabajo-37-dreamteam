import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader.jsx'
import Programs from '../../components/Programs.jsx'
import Values from '../../components/Values.jsx'
import FAQs from '../../components/FAQs.jsx'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
    </>

  )
}

export default Home