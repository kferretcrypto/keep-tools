import React from 'react'
import styled from 'styled-components'

import { H1, H2, H3 } from '../common/H'
import A from '../common/A'

const StakingECDSARisks = () => (
  <React.Fragment>
    <H1>ECDSA Node Risks &amp; Mitigation Strategies</H1>
    <P>(AKA "How Not to Lose Money Staking for tBTC")</P>
    <P>Last Updated: October 31, 2020</P>
    <H2>Introduction</H2>
    <P>
      This guide highlights some common ways people running ECDSA nodes can lose
      money while staking and explains strategies for reducing the likelihood of
      such losses. Note that following this plan will likely dramatically lower
      your risk but will not eliminate it completely. The reality is staking is
      risky and you have to decide the level of risk you want to take. Do your
      own research and I am not responsible for what happens to your node.
    </P>
    <P>
      This guide is a community contribution by kferret, the maintainer of Keep
      Tools and Keep Stats. It is based on my experience running a node during
      tBTC's first month of operation. Hopefully these tips and tricks developed
      from many sleepless nights will equip you to be a resilient and profitable
      staker.
    </P>
    <br />

    <H2>Common Causes for Loss</H2>
    <H3>
      Any node in a signing group your node is part of does not respond when a
      new deposit is initiated
    </H3>
    <P>
      If your node is selected as a signer for a new deposit, all three signers
      in the signing group have three hours to respond with a public key which
      is used to create the bitcoin address for the deposit. If any node does
      not respond within these three hours, anyone can call{' '}
      <code>notifySignerSetupFailure</code>. Then the bonds will be unlocked but
      one-third of the setup fee will be permanently subtracted from each of the
      three node's bond balances. This deposit will also be considered
      terminated and not eligible for stakedrop rewards. If no one calls{' '}
      <code>notifySignerSetupFailure</code>, the bonds remain locked until it is
      called. Common reasons for a node failing to respond is the node being
      offline or the node not having enough ETH in the operator wallet to pay
      for gas to submit transactions.
    </P>
    <br />
    <H3>
      Any node in a signing group your node is part of does not respond when a
      redemption is initiated
    </H3>
    <P>
      If a redemption is initiated for a deposit belonging to a signing group
      that your node is part of, the signing group has two hours to submit a
      signature. Generating the signature requires the participation of all
      three nodes in the signing group. If the signature is not provided, anyone
      can call <code>notifyRedemptionSignatureTimeout</code> and this will start
      a liquidation, where the bond gets auctioned off, the redeemer gets
      replacement TBTC, and the auction remains are split between the reporter
      and the signing group. In this case, you can lose most of your bond or all
      of your bond for this deposit, depending on when the auction is completed.
      However, assuming that all three nodes still have the data associated with
      the deposit and the three stakers agree to coordinate, the BTC deposited
      can be recovered and split between the three stakers.
    </P>
    <br />
    <H3>Deposit collateral falls below the minimum</H3>
    <P>
      If the collateral backing a deposit falls below the minimum (currently ETH
      equivalent to 110% of the deposit value), anyone can call{' '}
      <code>notifyUndercollateralizedLiquidation</code> and this will start a
      liquidation, where the bond gets auctioned off, the holder of the TDT
      (token representing the deposit) gets replacement TBTC, and the auction
      remains are split between the reporter and the signing group. If the
      holder of the TDT is the tBTC vending machine, the replacement TBTC will
      be burned. In this case, you can lose most of your bond or all of your
      bond for this deposit, depending on when the auction is completed.
      However, assuming that all three nodes still have the data associated with
      the deposit and the three stakers agree to coordinate, the BTC deposited
      can be recovered and split between the three stakers.
    </P>
    <br />
    <H3>
      Depositor abandons the deposit before requesting the bitcoin address
    </H3>
    <P>
      A depositor can initiate a deposit and then immediately leave the process,
      failing to progress the deposit beyond this point. Usually, the depositor
      is responsible for calling <code>retrieveSignerPubkey</code> after the
      three nodes in the signing group provide the public key. However, anyone
      can call <code>retrieveSignerPubkey</code> and then three hours after
      that, <code>notifyFundingTimedout</code> can be called if no bitcoin has
      been deposited and the bonds will be released. But if no one calls{' '}
      <code>retrieveSignerPubkey</code>, then someone can call{' '}
      <code>notifySignerSetupFailure</code> after a three hour timeout, and the
      same things will happen as if one or more of the nodes failed to respond
      when a new deposit is initiated. This means that the bonds will be
      unlocked but one-third of the setup fee will be permanently subtracted
      from each of the three node's bond balances. This deposit will also be
      considered terminated and not eligible for stakedrop rewards. If no one
      calls <code>notifySignerSetupFailure</code>, the bonds remain locked until
      it is called or <code>retrieveSignerPubkey</code> and{' '}
      <code>notifyFundingTimedout</code> are called.
    </P>
    <br />
    <H3>Redeemer does not submit redemption proof after receiving BTC</H3>
    <P>
      After receiving BTC from a redemption and waiting for six confirmations,
      the redeemer is expected to submit a redemption proof that confirms this.
      However, there is no penalty for a redeemer simply leaving the process and
      never providing the redemption proof. Anyone else can provide the
      redemption proof, but there is no incentive for doing so. If no one
      provides the redemption proof within six hours, anyone can call{' '}
      <code>notifyRedemptionProofTimedout</code> and this will start a
      liquidation, where the bond gets auctioned off, the redeemer gets
      replacement TBTC, and the auction remains are split between the reporter
      and the signing group. In this case, you can lose most of your bond or all
      of your bond for this deposit, depending on when the auction is completed.
      However, because the BTC was already sent but the system has no proof it
      was sent, the nodes in the signing group get double penalized as you lose
      both the BTC and part or all of the bond.
    </P>
    <br />
    <H3>
      In a redemption, BTC was sent with a low fee and will not confirm within
      the six hour limit
    </H3>
    <P>
      Sometimes a redemption will occur normally but the BTC was sent with too
      low of a fee, and it is unable to be confirmed the required six times
      within the six hour limit. After six hours, anyone can call{' '}
      <code>notifyRedemptionProofTimedout</code> and this will start a
      liquidation, where the bond gets auctioned off, the redeemer gets
      replacement TBTC, and the auction remains are split between the reporter
      and the signing group. In this case, you can lose most of your bond or all
      of your bond for this deposit, depending on when the auction is completed.
      However, because the BTC was already sent but the system has no proof it
      was sent, the nodes in the signing group get double penalized as you lose
      both the BTC and part or all of the bond.
    </P>
    <br />
    <H2>Mitigation Strategies</H2>
    <H3>Monitor your node and its dependencies</H3>
    <P>
      In order to be sure that your node is able to fulfill its duties when
      required, you need to make sure it is up. Furthermore, you need to make
      sure it has access to everything it needs to function. The two most
      important dependencies are access to the Internet and a connection to your
      Ethereum provider (such as Infura). Your node needs to be available 24/7
      because you can not predict when it will be selected for a signing group
      or someone will redeem a deposit that requires your node. There is no way
      you can possibly make sure that your node is online 24/7 without setting
      up some sort of automated monitoring that notifies you when something is
      offline. Here is{' '}
      <A href="https://gist.github.com/afmsavage/7c8a9ccf085bedbc0a2880472a9ef984">
        one community resource for monitoring
      </A>{' '}
      and there are others as well. Make sure that your monitoring is able to
      raise you at any time, including when you are sleeping. Your node does not
      sleep when you sleep. One way to do this is to set up your monitoring
      system to alert you with SMS texts or phone calls. Set your phone to allow
      these alerts to bypass any kind of Do Not Disturb or silence mode you
      might set on your phone.
    </P>
    <br />
    <H3>Back up your node regularly</H3>
    <P>
      In order to access the BTC deposited with your signing group, your node
      needs to store its share of the key as a file. This is persistent data
      that needs to be kept available until the deposit is either redeemed or
      liquidated. Without it, your node will be unable to provide the signature
      for a redemption request, and if the deposit is liquidated, you will be
      unable to recover and split the deposited BTC.
    </P>
    <P>
      So make sure the persistent data is stored in a reliable filesystem
      (preferably a replicated filesystem, meaning multiple copies are stored of
      each file, so one hard drive or SSD failing will not completely wipe it
      out). And make sure that your persistent data is backed up securely to
      off-site storage such as Backblaze B2. Imagine if your datacenter goes
      offline for some reason or deletes your node either accidentally or due to
      some sort of system failure. If you do not have an off-site copy, that
      could mean the data is permanently lost.
    </P>
    <br />
    <H3>Be ready to launch a replacement node in minutes</H3>
    <P>
      In case your datacenter goes offline either unexpectedly or due to
      scheduled maintenance, you need to be able to spin up an identical copy of
      your node with the same data, so that it can perform its duties, in the
      case your original datacenter is not expected to return your original node
      to service within the amount of time required to prevent a timeout
      situation. The easiest way to do this is to make sure that your node is
      deployed using some kind of reproducible process. For example, if you used
      Docker Compose or Kubernetes properly, or even rolled your own scripts,
      you can easily run a few commands to start up an identical node within
      minutes. Now imagine if instead you manually executed 20 different
      commands to set up your node, and did a tweak here and there, on different
      days, and did not even save the commands and the configuration files you
      used, how long will it take you to set up a new identical node if you lose
      access to your old node? Maybe hours? Maybe it would not even be possible?
    </P>
    <br />
    <H3>
      Monitor your node's deposits for progress and collateralization ratio
    </H3>
    <P>
      You can monitor each deposit that involves your node and make sure that it
      progresses normally. For example, if someone abandons the deposit, you can
      make sure that <code>retrieveSignerPubkey</code> is called and{' '}
      <code>notifyFundingTimedout</code> is called at the appropriate times. If
      someone redeems a redeposit but does not submit the redemption proof, you
      can submit the redemption proof. You also want to watch for the
      collateralization ratio falling too low, and redeem your own deposits that
      are at risk before it goes into liquidation.
    </P>
    <P>
      This definitely requires a high level of effort, but it is necessary if
      you want to make sure that your node is never unfairly penalized. In the
      future, some of these watchdog activities may be built in to the node
      client itself, but until then, you should consider doing it yourself. The
      most simple and manual way to do it is to use a deposit explorer, such as
      All The Keeps. Simply navigate to your node's page in the Operators
      section of All The Keeps. However, manually monitoring this page is very
      time consuming. A trick to automate monitoring this is to use a monitoring
      system to hit the relevant The Graph queries and notify you when certain
      changes occur.
    </P>
    <br />
    <H3>Check the history of other nodes in your signing group</H3>
    <P>
      If you want to invest the effort and make sure as many deposits are
      successful as possible, you can watch each deposit that goes through your
      node and inspect the other two nodes involved. Using a explorer like All
      The Keeps, check the history of the other nodes. Do they have a good track
      record? Have they been involved in manual faults? If it looks like they
      have been responsible in many faults, their node might be operated poorly
      with poor uptime. In that case, you might not want to be in a deposit with
      them and risk the possibility they will be offline when needed for a
      redemption in the future. To exit, simply redeem your the deposit.
    </P>
    <br />
    <H3>Monitor bitcoin transactions for redemptions</H3>
    <P>
      To make sure that redemptions go smoothly, you can watch the bitcoin
      transaction so you know when the BTC has been sent and you can make sure
      that they are confirmed in a timely manner. If the transaction does not
      seem like it will receive the six required confirmations within the six
      hour timeout period, there is a manual process that allows you to direct
      the nodes to resubmit the transaction with a higher fee.
    </P>
    <br />
    <H3>Monitor your operator wallet balance</H3>
    <P>
      If your node's operator wallet does not have enough ETH to submit
      necessary transactions, failures can occur similar to if your node were
      completely offline. You can either keep a close eye on your operator
      wallet balance to make sure it does not fall below a certain amount, use a
      monitoring service, or simply regularly top it off with enough ETH that it
      will never run low.
    </P>
    <br />
    <H3>Keep enough TBTC on hand to redeem your node's largest deposit</H3>
    <P>
      In the case of the collateralization ratio falling to risky levels on a
      deposit or simply if you want to exit a deposit because an operator with a
      poor track record is involved, you can redeem your own deposit if you have
      enough TBTC. A tricky situation many people get into is they do not have
      enough funds to get the TBTC necessary to redeem a deposit that their node
      is part of. A good guideline to prevent this situation from occurring is
      to always make sure that you have enough TBTC on hand to redeem the
      largest deposit that your node can be part of, based on your bond balance.
    </P>
    <br />
    <H3>Consider redeeming your node's older deposits</H3>
    <P>
      This is not necessarily recommended as a general practice but it is worth
      considering if you want to be extra safe. Consider that all three out of
      three nodes of each signing group need to be responsive for the entire
      duration of the deposit until it is redeemed or liquidated. This could be
      as long as six months. Considering the entire six month timespan, the at
      the beginning the risk of one or more of the nodes failing is close to
      zero, because you know they were functioning well enough to facilitate
      creating the deposit, and not enough time has passed for something bad as
      happened. As more and more time passes, the likelihood increases that at
      least one of the nodes will fail. Do you trust that all three nodes will
      do their job six months from now? One way to reduce this risk is to redeem
      the deposits your node is part of as they age. For example, you might
      decide that any deposit that is more than two months old is too risky, so
      you redeem all of those.
    </P>
    <br />
    <H2>Reference</H2>
    <P>
      <A href="https://hackmd.io/@protocollayer/BkUBl7zIw">
        Keep Network (Random Beacon/ECDSA Groups) Risk - Liquidation and
        Slashing Details
      </A>
    </P>
    <P>
      <A href="https://docs.keep.network/tbtc/index.html">
        tBTC: A Decentralized Redeemable BTC-backed ERC-20 Token
      </A>
    </P>
  </React.Fragment>
)

const P = styled.p`
  margin-top: 0;
`
export default StakingECDSARisks
