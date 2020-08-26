import React from 'react'

import { H1, H2 } from '../common/H'
import Table from '../common/Table'
import A from '../common/A'

const commonTableData = [
    ['Repository', 'Description'],
    [<A href="https://github.com/keep-network/keep-core/">keep-core</A>, 'Keep Ethereum smart contracts and client for Random Beacon nodes'],
    [<A href="https://github.com/keep-network/keep-ecdsa/">keep-ecdsa</A>, 'Keep Ethereum smart contracts and client for ECDSA nodes'],
    [<A href="https://github.com/keep-network/tbtc/">tbtc</A>, 'tBTC Ethereum smart contracts and specification'],
    [<A href="https://github.com/keep-network/tbtc.js/">tbtc.js</A>, 'JavaScript bindings for tBTC'],
    [<A href="https://github.com/keep-network/tbtc-dapp/">tbtc-dapp</A>, 'Dapp for depositing BTC and redeeming tBTC'],
    [<A href="https://github.com/keep-network/whitepaper/">whitepaper</A>, 'Whitepaper describing the Keep Network'],
]

const moreTableData = [
    ['Repository', 'Description'],
    [<A href="https://github.com/keep-network/local-setup/">local-setup</A>, 'Scripts for local development and testing of Keep and tBTC'],
    [<A href="https://github.com/keep-network/keep-common/">keep-common</A>, 'Common libraries and tools used across Keep'],
    [<A href="https://github.com/keep-network/website/">website</A>, 'Keep Network website'],
    [<A href="https://github.com/keep-network/tbtc-website/">tbtc-website</A>, 'tBTC website'],
    [<A href="https://github.com/keep-network/random-beacon-yellowpaper/">random-beacon-yellowpaper</A>, 'Yellowpaper describing the Keep Random Beacon'],
]


const GitHubRepos = () => (
  <React.Fragment>
    <H1>GitHub Repositories</H1>
    <H2>Common Repositories</H2>
    <Table data={commonTableData} />

    <H2>Additional Repositories</H2>
    <Table data={moreTableData} />
  </React.Fragment>
)

 export default GitHubRepos
