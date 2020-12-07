import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { testeAction } from '../store/actions/teste'

// Styles
import { Container } from '../assets/styles/GridStyles'
import { Botao } from '../assets/styles/BotaoSyles'
import { Paragrafo } from '../assets/styles/TextoStyles'

// Components
import Titulo from '../components/Titulo'

const Redux = () => {

  const testeRedux = useSelector(state => state.teste)
  const dispatch = useDispatch()
  const valorTeste = testeRedux.teste.toString()

  useEffect(() => {
    console.log('Redux: ', testeRedux)
  }, [testeRedux])

  return (

    <Container>

      <Titulo titulo="Redux" />

      <Paragrafo>Veja o objeto completo no console</Paragrafo>

      <Paragrafo>Valor de Teste: { valorTeste }</Paragrafo>

      <Botao onClick={() => dispatch(testeAction(!testeRedux.teste))} type="button">Trocar</Botao>

    </Container>

  )

}

export default Redux
