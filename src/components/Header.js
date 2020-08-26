import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as IconGitHub } from '../assets/icon-github.svg'

const Header = ({ gitHubUrl }) => {
  return (
    <StyledHeader>
      <NavBar>
        <Link to="/">
          <StyledLogo />
        </Link>

        <NavBarA href={gitHubUrl}>
          <IconGitHub />
          &nbsp;
          View on GitHub
        </NavBarA>

      </NavBar>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  height: 88px;
  background-color: #FFFFFF;
`

const NavBar = styled.div`
  @media only screen and (min-width: 980px) {
    width: 960px;
  }

  height: 88px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLogo = styled(Logo)`
  display: block;
`

const NavBarA = styled.a.attrs(props => ({
  target: '_blank',
}))`
  height: 30px;
  padding: 0 10px;

  display: flex;
  align-items: center;

  border: 1px solid #000000;

  color: #000000;
  opacity: 0.7;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 0.5;
  }
`

export default Header
