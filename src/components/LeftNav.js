import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const LeftNav = ({ routes, sections }) => (
  <StyledLeftNav>
    {sections.map(({ id, name }) => {
      return [
        name ? (
          <LeftNavSectionTitle key={name}>{name}</LeftNavSectionTitle>
        ) : null,
        routes
          .filter(({ section }) => section === id)
          .map(({ exact, path, name }) => (
            <LeftNavItem exact={exact} to={path} key={path}>
              {name}
            </LeftNavItem>
          )),
      ]
    })}
    {}
  </StyledLeftNav>
)

const StyledLeftNav = styled.ul`
  padding: 0;
  margin: 0 0 20px 0;

  list-style: none;
  font-size: 14px;

  @media only screen and (min-width: 980px) {
    width: 160px;
  }
`

const LeftNavSectionTitle = ({ children }) => (
  <li>
    <SectionTitle>{children}</SectionTitle>
  </li>
)

const SectionTitle = styled.div`
  padding: 24px 6px 2px 6px;

  border-right: 1px solid #e7e7e7;

  color: #454545;
  font-weight: bold;

  @media only screen and (min-width: 980px) {
    width: 158px;
  }
`

const LeftNavItem = ({ exact, to, children }) => (
  <li>
    <LeftNavLink exact={exact} to={to} activeClassName="active">
      {children}
    </LeftNavLink>
  </li>
)

const LeftNavLink = styled(NavLink)`
  display: block;
  padding: 4px 6px 2px 6px;

  border-right: 1px solid #e7e7e7;

  color: #454545;
  text-decoration: none;

  @media only screen and (min-width: 980px) {
    width: 158px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    background-color: #ffffff;
  }

  &.${(props) => props.activeClassName} {
    background-color: #ffffff;
    border-right: 3px solid #48dbb4;

    color: #48dbb4;
    font-weight: bold;

    @media only screen and (min-width: 980px) {
      width: 157px;
    }
  }
`

export default LeftNav
