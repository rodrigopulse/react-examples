import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import styled from 'styled-components'
import { PrimaryColor } from '../assets/styles/ColorStyles'

const Menu = () => {

  return (

    <MenuWrapper>

      <MenuBotao to="/" exact={ true }>Home</MenuBotao>

      <MenuBotao to="/formulario">Formulário</MenuBotao>

      <MenuBotao to="/redux">Redux</MenuBotao>

    </MenuWrapper>

  )

}

// Styles
const MenuWrapper = styled.nav `
  width: auto;
  height: auto;
  position: relative;
  margin: 0;
  display: flex;
  justify-content: flex-start;
`
const MenuBotao = styled(NavLink) `
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 25px;
  transition: all ease-in-out .5s;
  &:visited, &:active {
    color: #fff;
    text-decoration: none;
  }
  &:hover {
    color: ${PrimaryColor};
  }
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: ${PrimaryColor};
  }
`

export default Menu
