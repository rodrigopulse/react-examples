import React from 'react'
import styled from 'styled-components';

// Commons
import Menu from './Menu'

const Header = () => {

  return (

    <HeaderWrapper>
      <HeaderContent>
        <Menu />
      </HeaderContent>
    </HeaderWrapper>

  )

}

// Styles
const HeaderWrapper = styled.header `
  width: 100%;
  height: auto;
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeaderContent = styled.div `
  width: 100%;
  height: 60px;
  position: relative;
  padding: 0 20px;
  display: flex;
  align-items: center;
`

export default Header
