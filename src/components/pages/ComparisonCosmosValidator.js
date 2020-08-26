import React from 'react'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'
import A from '../common/A'

const ComparisonCosmosValidator = () => (
  <React.Fragment>
    <H1>Cosmos Validator Comparison Guide</H1>

    <P>Last Updated: August 26, 2020</P>

    <H2>Introduction</H2>
    <P><strong>Note: This guide is currently a work-in-progress.</strong></P>
    <P>
      This guide is designed for those already familiar with running a Cosmos Validator to learn more about running a Keep node, or for anyone who wishes to compare and contrast the two. Therefore, it assumes that you are fairly technical. As with all cryptocurrency and blockchain technologies, things can change fairly quickly so please make sure that the version of this page you are reading has been updated in the past few months.
    </P>
    <br />

    <H2>Blockchain and Availability</H2>
    <P>
      Keep is currently running in testing on the Ethereum Ropsten testnet. It currently facilitates tokenized testnet Bitcoin to be used on Ropsten. The token is named tBTC.
    </P>
    <P>
      Cosmos is intended to be a network of thousands of interconnected blockchains called the Cosmos Network. The first and currently operating blockchain is called the Cosmos Hub, which has a primary token called the ATOM (<A href="https://hub.cosmos.network/master/hub-overview/overview.html">Source: Cosmos Hub</A>).
    </P>

    <br />

    <H2>Node Function</H2>
    <P>
      There are currently two types of Keep nodes available for the public to operate: Random Beacon and ECDSA. Random Beacon nodes provide a proven and decentralized on-chain source of randomness, which is an essential building block for selecting providers for keeps, off-chain containers for private data (<A href="https://blog.keep.network/whats-in-a-beacon-12c34b0bc078">Source: Keep Blog</A>). The ECDSA node is responsible for providing a kind of multi-party cryptographic service that powers the tBTC system including signing BTC transactions.
    </P>
    <P>
      Cosmos Validators run full nodes for the Cosmos Hub blockchain and participate in consensus. Essentially, they are responsible for constructing and maintaining the security of the blockchain by adding new blocks. Validators are also expected to participate in governance by voting on proposals (<A href="https://hub.cosmos.network/master/validators/validator-faq.html">Source: Cosmos Hub Validator FAQ</A>).
    </P>
    <br />

    <H2>Staking and Slashing</H2>
    <P>
      To operate a Keep Random Beacon node on Ropsten, the minimum stake is 100,000 KEEP. The minimum stake requirement is expected to decrease over time but the schedule is not yet known. To operate a Keep ECDSA node requires ETH to be made available for bonding. There is no fixed minimum amount of ETH, but it should be at least half of the smallest deposit transaction available in the tBTC system to be selected for bonding. If an operator does not meet the requirements of the operator contract, the stake can be slashed and this slashing system is already in effect.
    </P>
    <P>
      The Cosmos Hub is a Proof-of-Stake blockchain so the weight of each Validator is determined by how many ATOM tokens are staked. The ATOMs can be staked by the owner of the Validator directly or delegated by other ATOM holders. Currently, only the top 100 Validators with the most ATOMs staked will be Active Validators. The stake can be slashed for misbehavior, which currently describes two specific faults: double signing or downtime (<A href="https://hub.cosmos.network/master/validators/validator-faq.html">Source: Cosmos Hub Validator FAQ</A>).

    </P>
    <br />

    <H2>Rewards</H2>
    <P>
      Since Keep is currently running in testing, the rewards for operating Keep nodes comes in the form of a program called Playing for Keeps (<A href="https://blog.keep.network/how-to-play-for-keeps-297f246455d4">Source: Keep Blog</A>). In this program, the Keep team rewards community members for contributing. In the past, rewards have been given for operating nodes, participating in the community, and contributions in various forms, including design and technical efforts. The rewards are granted in the form of the KEEP token. Larger grants are vested over a one year period but will allow for immediate staking in the production version of Keep. Smaller grants are in the form of liquid KEEP tokens which are not subject to vesting restrictions. In the future, rewards are expected in the form of a stakedrop and fee rewards which more directly rewards staking and operating nodes.
    </P>
    <P>
      Cosmos Validators and stakers earn from block rewards and transaction fees. Block rewards are a form of inflation, i.e. additional ATOMs are added to the supply for the purpose of rewarding Cosmos Validators. Transaction fees are ATOMs paid by users of the blockchain. The total revenue from these two pools are divided among Cosmos Validators based on staking weight. The operator of the Cosmos Validator earns more than the ATOM stakers who delegated their stake to the Validator (<A href="https://hub.cosmos.network/master/validators/validator-faq.html">Source: Cosmos Hub Validator FAQ</A>).
    </P>
    <br />

    <H2>Technical Requirements</H2>
    <P>
      The current requirement to operate a Keep node is a system capable of running the Keep clients implemented in Go, as well as all of the dependencies of the clients. This is usually a Linux server. The node requires reliable connectivity to the Internet and access to an Ethereum node, which can be provided by a third party, usually Infura. Systems with modest resources are usually capable of running Keep nodes, including small VPS instances at common cloud providers. However, nodes with low CPU allotment may struggle to run the computations required for an ECDSA node. Additionally, these requirements may change when Keep is launched to mainnet. Deploying and maintaining Keep clients currently involves manually editing configuration files and running cloud or system administrator commands, so a certain level of technical knowledge is required.
    </P>
    <P>
      The current requirement to operate a Cosmos Validator is a system capable of running Gaia, the Cosmos client implemented in Go as well as all of the dependencies of the client. This is usually a Linux server with a special additional expectation of Hardware Security Module hardware. The node requires reliable connectivity to the Internet. Cosmos advises that the current resource requirement to operate a Validator is modest but may rise as blockchain usage grows. Cosmos warns about possible denial-of-service attacks and a recommended strategy to mitigate this risk to connect to only trusted nodes. Cosmos projects that when the network is heavily used, the bandwidth usage per day may be measured in gigabytes. Cosmos also advises that running a successful Validator operation will "require the efforts of multiple highly skilled individuals and continuous operational attention", and will be much more involved than many other kinds of nodes. In short, this is not a "set it and forget it" operation (our words) and will likely be suited to professional operators, especially as competition rises to be in the top 100 allowed to be an Active Validator (<A href="https://hub.cosmos.network/master/validators/validator-faq.html">Source: Cosmos Hub Validator FAQ</A>).
    </P>
    <br />

  </React.Fragment>
)

const P = styled.p`
  margin-top: 0;
`
export default ComparisonCosmosValidator
