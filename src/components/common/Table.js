import React from 'react'
import styled from 'styled-components'

// Uses indexes as keys because this is a static data table

export const Table = ({ data }) => {
  return (
    <StyledTable>
      <THead>
        <TR>
          {data[0].map((cell, i) => (
            <TH key={i} width={i === 0 ? '30%' : ''}>
              {cell}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {data.slice(1).map((row, i) => (
          <TR key={i}>
            {row.map((cell, j) => (
              <TD key={j}>{cell}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  margin-bottom: 36px;
`

const THead = styled.thead``

const TBody = styled.tbody``

const TH = styled.th`
  padding: 6px 24px 6px 10px;

  background-color: #48dbb4;

  text-align: left;
`

const TR = styled.tr``

const TD = styled.td`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 6px 10px;

  &:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > a {
    max-width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export default Table
