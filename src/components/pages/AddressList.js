import React from 'react'

import { H1, H2 } from '../common/H'
import Table from '../common/Table'
import A from '../common/A'

const ropstenTokenAddresses = [
  ['KEEP', '0x343d3DDA00415289CDD4E8030F63a4A5a2548ff9'],
  ['tBTC', '0x7c07C42973047223F80C4A69Bb62D5195460Eb5F'],
  ['tBTC Deposit Token (TDT)', '0x7cAad48DF199Cd661762485fc44126F4Fe8A58C9'],
]

const ropstenTokenTableData = [['Name', 'Address']].concat(
  ropstenTokenAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const ropstenBeaconAddresses = [
  ['TokenStaking', '0x234d2182B29c6a64ce3ab6940037b5C8FdAB608e'],
  ['KeepRandomBeaconService', '0x6c04499B595efdc28CdbEd3f9ed2E83d7dCCC717'],
  ['KeepRandomBeaconOperator', '0xC8337a94a50d16191513dEF4D1e61A6886BF410f'],
]

const ropstenBeaconTableData = [['Name', 'Address']].concat(
  ropstenBeaconAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const ropstenECDSAAddresses = [
  ['BondedECDSAKeepFactory', '0x9EcCf03dFBDa6A5E50d7aBA14e0c60c2F6c575E6'],
  ['Sanctioned Applications', '0xc3f96306eDabACEa249D2D22Ec65697f38c6Da69'],
]

const ropstenECDSATableData = [['Name', 'Address']].concat(
  ropstenECDSAAddresses.map((record) => [
    record[0],
    <A href={`https://ropsten.etherscan.io/address/${record[1]}`}>
      {record[1]}
    </A>,
  ])
)

const AddressList = () => (
  <React.Fragment>
    <H1>Address List</H1>
    <H2>Ropsten - Tokens</H2>
    <Table data={ropstenTokenTableData} />
    <H2>Ropsten - Random Beacon Node</H2>
    <Table data={ropstenBeaconTableData} />
    <H2>Ropsten - ECDSA Node</H2>
    <Table data={ropstenECDSATableData} />
  </React.Fragment>
)

export default AddressList
