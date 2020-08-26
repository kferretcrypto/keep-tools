import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const A = (props) => (
  <StyledA target="_blank" {...props} />
)

const StyledA = styled.a`
  color: #000;
  font-weight: bold;
`

export default A
