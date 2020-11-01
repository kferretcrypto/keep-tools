import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'

import { ReactComponent as Tower } from '../../assets/tower.svg'

const Home = ({ routes }) => (
  <React.Fragment>
    <Splash>
      <SplashText>
        <H1>Welcome to Keep Tools</H1>
        <Subtitle>
          Tools and resources for contributing to the Keep Network
        </Subtitle>
      </SplashText>
      <StyledTower />
    </Splash>
    <Cards>
      {routes
        .filter(({ section }) => section === 'main')
        .map(({ path, name, description }) => (
          <Card path={path} name={name} description={description} key={path} />
        ))}
    </Cards>

    <H2>Staking Guides</H2>
    <StyledP marginBottom="16px">
      Information to help you become a better staker for the Keep Network.
    </StyledP>
    <Cards>
      {routes
        .filter(({ section }) => section === 'staking')
        .map(({ path, name, description }) => (
          <Card path={path} name={name} description={description} key={path} />
        ))}
    </Cards>

    <H2>Comparison Guides</H2>
    <StyledP marginBottom="16px">
      For those participating in another network and considering Keep, learn
      about similarities and differences.
    </StyledP>
    <Cards>
      {routes
        .filter(({ section }) => section === 'comparison')
        .map(({ path, name, description }) => (
          <Card path={path} name={name} description={description} key={path} />
        ))}
    </Cards>
  </React.Fragment>
)

const Splash = styled.div`
  display: flex;
  height: 170px;
  margin-bottom: 16px;

  padding: 0 20px;
  background-color: #eefffa;
  border-radius: 10px;
`

const SplashText = styled.div`
  flex: 1;
  display: flex;

  flex-direction: column;
  justify-content: center;
`

const Subtitle = styled.p`
  margin: -8px 0 0 0;

  font-size: 18px;
`

const StyledTower = styled(Tower)`
  display: none;

  @media only screen and (min-width: 980px) {
    display: block;
    margin-top: -11px;
  }
`

const Cards = styled.div`
  display: grid;
  margin-bottom: 48px;

  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const Card = ({ path, name, description }) => (
  <StyledLink to={path}>
    <StyledCard>
      <StyledH2>{name}</StyledH2>
      {description && <StyledP>{description}</StyledP>}
    </StyledCard>
  </StyledLink>
)

const StyledCard = styled.div`
  padding: 20px;

  background-color: #ffffff;
  border-radius: 10px;

  transition: transform 0.2s;

  @media only screen and (min-width: 980px) {
    height: 100%;
    max-height: 84px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transition: none;
    transform: scale(1);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledH2 = styled(H2)`
  color: #000000;
  margin-bottom: 0;
`

const StyledP = styled.p`
  color: #363636;
  font-size: 14px;
  margin-top: 6px;
  margin-bottom: ${(props) => props.marginBottom || 0};
`

export default Home
