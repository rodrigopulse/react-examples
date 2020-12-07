import React from 'react'
import styled from 'styled-components'

const Titulo = (props) => {

  return ( <TituloStyle>{ props.titulo }</TituloStyle> )

}

const TituloStyle = styled.h1 `
  font-size: 28px;
  margin-bottom: 20px
`
export default Titulo
