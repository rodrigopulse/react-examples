import React from 'react'

// Styles
import { Container } from '../assets/styles/GridStyles'
import { Paragrafo } from '../assets/styles/TextoStyles'

// Components
import Titulo from '../components/Titulo'

const Home = () => {

  return (

    <Container>

      <Titulo titulo="Home" />

      <Paragrafo>Esse projeto tem o intuito de manter exemplos para utilizar no React.</Paragrafo>

    </Container>

  )
}

export default Home
