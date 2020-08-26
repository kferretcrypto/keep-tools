import React from 'react'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'
import TextInputWithLabel from '../common/TextInputWithLabel'
import Table from '../common/Table'
import A from '../common/A'

const ropstenETHTableData = [
    ['Faucet', 'Description'],
    [<A href="https://faucet.metamask.io/">faucet.metamask.io</A>, '1 ETH x 5 times per hour, gets cranky if balance > 5 ETH'],
    [<A href="https://teth.bitaps.com/">bitaps.com</A>, '1 ETH per minute'],
    [<A href="https://faucet.ropsten.be/">faucet.ropsten.be</A>, 'Bans you for requesting frequently']
]

const testnetBTCTableData = [
    ['Faucet', 'Description'],
    [<A href="https://bitcointalk.org/index.php?topic=5237763.0">bitcointalk.org</A>, 'List of Testnet BTC faucets with comments'],
]

class Faucets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operatorAddress: '',
    }
  }

  handleInputChange = (id, event) => {
    const { value } = event.target
    this.setState({
      [id]: value,
    })
  }

  requestRopstenKeep = (operatorAddress) => {
    const url = `https://us-central1-keep-test-f3e0.cloudfunctions.net/keep-faucet-ropsten?account=${operatorAddress}`
    window.open(url)
  }

  render() {
    return (
      <React.Fragment>
        <H1>Faucets</H1>
        <H2>Ropsten KEEP</H2>
        <TextInputWithLabel
          label="Operator Address"
          placeholder="0x0000000000000000000000000000000000000000"
          value={this.state.operatorAddress}
          onChange={this.handleInputChange.bind(this, 'operatorAddress')}
        />
        <Button
          onClick={this.requestRopstenKeep.bind(
            this,
            this.state.operatorAddress
          )}
        >
          Request Ropsten KEEP
        </Button>
        <H2>Ropsten ETH</H2>
        <Table data={ropstenETHTableData} />
        <H2>Testnet BTC</H2>
        <Table data={testnetBTCTableData} />
      </React.Fragment>
    )
  }
}

const Button = styled.button`
  margin-bottom: 36px;

  @media only screen and (min-width: 980px) {
    margin-left: 242px;
  }
`


 export default Faucets
