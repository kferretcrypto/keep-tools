import React from 'react'

import { H1, H2 } from '../common/H'
import Table from '../common/Table'
import A from '../common/A'

const ropstenTokenAddresses = [
  ['KEEP', '0x07613e772b0D2e4A230038A67b1Edd55459EFD5E'],
  ['tBTC', '0x179eabC663E7d282eF1d25bfcBdA19e5d210E7D7'],
  ['tBTC Deposit Token (TDT)', '0x51a349EF58677944de3A8d81243E356a0c4E7b99'],
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
  ['TokenStaking', '0x8117632eC1D514550b3880Bc68F9AC1A76c9C67B'],
  ['KeepRandomBeaconService', '0xd83248e311DC2Ba0d2A051e86f0678d8857f6ADD'],
  ['KeepRandomBeaconOperator', '0xf417b31104631280adF9F6828ee19985BC299fdC'],
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
  ['BondedECDSAKeepFactory', '0xb37c8696cD023c11357B37b5b12A9884c9C83784'],
  ['Sanctioned Applications', '0x9F3B3bCED0AFfe862D436CB8FF462a454040Af80'],
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
