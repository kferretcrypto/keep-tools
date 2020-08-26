import React from 'react'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'
import A from '../common/A'

const ComparisonRenVMDarknode = () => (
  <React.Fragment>
    <H1>RenVM Darknode Comparison Guide</H1>
    <P>Last Updated: August 26, 2020</P>

    <H2>Introduction</H2>
    <P><strong>Note: This guide is currently a work-in-progress.</strong></P>
    <P>
      This guide is designed for those already familiar with running a RenVM Darknode to learn more about running a Keep node, or for anyone who wishes to compare and contrast the two. Therefore, it assumes that you are fairly technical. As with all cryptocurrency and blockchain technologies, things can change fairly quickly so please make sure that the version of this page you are reading has been updated in the past few months.
    </P>
    <br />

    <H2>Blockchain and Availability</H2>
    <P>
      Keep is currently running in testing on the Ethereum Ropsten testnet. It currently facilitates tokenized testnet Bitcoin to be used on Ropsten. The token is named tBTC.
    </P>
    <P>
      In contrast, RenVM is currently running in production on the Ethereum mainnet. It currently facilitates tokenized Bitcoin, Bitcoin Cash, and Zcash to be used on Ethereum. These tokens are named renBTC, renBCH, and renZEC.
    </P>
    <br />

    <H2>Node Function</H2>
    <P>
      There are currently two types of Keep nodes available for the public to operate: Random Beacon and ECDSA. Random Beacon nodes provide a proven and decentralized on-chain source of randomness, which is an essential building block for selecting providers for keeps, off-chain containers for private data (<A href="https://blog.keep.network/whats-in-a-beacon-12c34b0bc078">Source: Keep Blog</A>). The ECDSA node is responsible for providing a kind of multi-party cryptographic service that powers the tBTC system including signing BTC transactions.
    </P>
    <P>
      There is currently one type of RenVM node available for the public to operate: the Darknode. In the current phase of RenVM (sub-zero), publicly operated Darknodes are only involved in operating "P2P networking, including storage" (<A href="https://github.com/renproject/ren/wiki/Phases">Source: RenVM Wiki</A>). The critical functions of consensus and execution of cross-chain transactions are executed by a closed group of nodes called the Greycore, which are operated by RenVM developers and a small group of community members chosen by RenVM. In short, publicly operated Darknodes are not directly involved in signing token transactions.
    </P>
    <br />

    <H2>Staking and Slashing</H2>
    <P>
      To operate a Keep Random Beacon node on Ropsten, the minimum stake is 100,000 KEEP. The minimum stake requirement is expected to decrease over time but the schedule is not yet known. To operate a Keep ECDSA node requires ETH to be made available for bonding. There is no fixed minimum amount of ETH, but it should be at least half of the smallest deposit transaction available in the tBTC system to be selected for bonding. If an operator does not meet the requirements of the operator contract, the stake can be slashed and this slashing system is already in effect.
    </P>
    <P>
      To operate a RenVM Darknode, a bond of 100,000 REN is required. The REN is locked in a holding state until the beginning of the next Epoch, a recurring 28-day cycle of the RenVM system. Once the next Epoch starts, the Darknode can begin operating and the REN will serve its function as a bond. If the Darknode is deregistered, the bond will be refunded following the next complete Epoch. Therefore, upon registering, you can expect the REN to be locked for up at least 2-3 months. The purpose of the bond is to prevent bad behavior, in which case the bond would be slashed. The kind of behavior which would result in slashing is not well defined. However, it is said that one should not expect slashing unless they intentionally manipulate the Darknode code to operate incorrectly. In the case of downtime over 12 hours, the bond is not slashed but the Darknode will be deregistered.

    </P>
    <br />

    <H2>Rewards</H2>
    <P>
      Since Keep is currently running in testing, the rewards for operating Keep nodes comes in the form of a program called Playing for Keeps (<A href="https://blog.keep.network/how-to-play-for-keeps-297f246455d4">Source: Keep Blog</A>). In this program, the Keep team rewards community members for contributing. In the past, rewards have been given for operating nodes, participating in the community, and contributions in various forms, including design and technical efforts. The rewards are granted in the form of the KEEP token. Larger grants are vested over a one year period but will allow for immediate staking in the production version of Keep. Smaller grants are in the form of liquid KEEP tokens which are not subject to vesting restrictions. In the future, rewards are expected in the form of a stakedrop and fee rewards which more directly rewards staking and operating nodes.
    </P>
    <P>
      RenVM rewards Darknode operators by sharing a pool of fees obtained from users of primarily the RenBTC token. A fee of 0.1% is charged when users mint or redeem RenBTC tokens. These fees are pooled monthly, and then split evenly between Darknode operators over a two monthly distributions. These fees are paid to Darknode operators in the form of the currency that was tokenized. For example, RenBTC transaction fees provide for rewards in the form of BTC. As of August 2020, the monthly expected reward per Darknode has exceeded $100.
    </P>
    <br />

    <H2>Technical Requirements</H2>
    <P>
      The current requirement to operate a Keep node is a system capable of running the Keep clients implemented in Go, as well as all of the dependencies of the clients. This is usually a Linux server. The node requires reliable connectivity to the Internet and access to an Ethereum node, which can be provided by a third party, usually Infura. Systems with modest resources are usually capable of running Keep nodes, including small VPS instances at common cloud providers. However, nodes with low CPU allotment may struggle to run the computations required for an ECDSA node. Additionally, these requirements may change when Keep is launched to mainnet. Deploying and maintaining Keep clients currently involves manually editing configuration files and running cloud or system administrator commands, so a higher level of technical knowledge is required.
    </P>
    <P>
      The current requirement to operate a Darknode is a system capable of running the Darknode client with reliable connectivity to the Internet. RenVM provides a CLI-based system for deploying Darknode instances on the cloud platforms Digital Ocean, Amazon Web Services, and Google Cloud. Using this system of deployment is recommended. The recommended instance sizes allow for the smallest VPS instances to be used (<A href="https://docs.renproject.io/darknodes/getting-started/getting-started">Source: Darknodes Docs</A>). RenVM provides a web-based dashboard to monitor the status and earnings of each Darknode. However, most actions associated with maintaining the Darknode must be done from the CLI.
    </P>
    <br />

  </React.Fragment>
)

const P = styled.p`
  margin-top: 0;
`

export default ComparisonRenVMDarknode
