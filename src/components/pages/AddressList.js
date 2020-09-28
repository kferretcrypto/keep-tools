import React from 'react'

import { H1, H2 } from '../common/H'
import Table from '../common/Table'
import A from '../common/A'

// Mainnet

const mainnetTokenAddresses = [
  ['KEEP', '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec'],
  ['tBTC', '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa'],
  ['tBTC Deposit Token (TDT)', '0x10B66Bd1e3b5a936B7f8Dbc5976004311037Cdf0'],
]

const mainnetTokenTableData = [['Name', 'Address']].concat(
  mainnetTokenAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

const mainnetBeaconAddresses = [
  ['TokenStaking', '0x1293a54e160d1cd7075487898d65266081a15458'],
  ['KeepRandomBeaconService', '0x50510e691c90ea098e3fdd23c311731bf394aafd'],
  ['KeepRandomBeaconOperator', '0xdf708431162ba247ddae362d2c919e0fbafcf9de'],
]

const mainnetBeaconTableData = [['Name', 'Address']].concat(
  mainnetBeaconAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

const mainnetECDSAAddresses = [
  ['BondedECDSAKeepFactory', '0xA7d9E842EFB252389d613dA88EDa3731512e40bD'],
  ['Sanctioned Applications', '0xe20A5C79b39bC8C363f0f49ADcFa82C2a01ab64a '],
]

const mainnetECDSATableData = [['Name', 'Address']].concat(
  mainnetECDSAAddresses.map((record) => [
    record[0],
    <A href={`https://etherscan.io/address/${record[1]}`}>{record[1]}</A>,
  ])
)

// Ropsten

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
    <H2>Mainnet - Tokens</H2>
    <Table data={mainnetTokenTableData} />
    <H2>Mainnet - Random Beacon Node</H2>
    <Table data={mainnetBeaconTableData} />
    <H2>Mainnet - ECDSA Node</H2>
    <Table data={mainnetECDSATableData} />
    <H2>Ropsten - Tokens</H2>
    <Table data={ropstenTokenTableData} />
    <H2>Ropsten - Random Beacon Node</H2>
    <Table data={ropstenBeaconTableData} />
    <H2>Ropsten - ECDSA Node</H2>
    <Table data={ropstenECDSATableData} />
  </React.Fragment>
)

export default AddressList
