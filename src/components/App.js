import React, { useEffect } from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import 'typeface-raleway'
import 'typeface-nunito-sans'

import Header from './Header'
import LeftNav from './LeftNav'
import Home from './pages/Home'
import ConfigGenerator from './pages/ConfigGenerator'
import DockerCommands from './pages/DockerCommands'
import Faucets from './pages/Faucets'
import KeystoreTools from './pages/KeystoreTools'
import AddressList from './pages/AddressList'
import GitHubRepos from './pages/GitHubRepos'
import ComparisonCosmosValidator from './pages/ComparisonCosmosValidator'
import ComparisonRenVMDarknode from './pages/ComparisonRenVMDarknode'

const routes = [
  {
    path: '/',
    section: 'home',
    exact: true,
    name: 'Home',
    title: 'Keep Tools',
    content: () => <Home routes={routes} />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/Home.js',
  },
  {
    path: '/config-generator',
    section: 'main',
    exact: true,
    name: 'Config Generator',
    description: `Fill out a form to generate configuration files for your Keep
      nodes`,
    content: () => <ConfigGenerator />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/ConfigGenerator.js',
  },
  {
    path: '/docker-commands',
    section: 'main',
    exact: true,
    name: 'Docker Commands',
    description: `Cheatsheet for commands to create, start, restart, and inspect
      your Keep nodes`,
    content: () => <DockerCommands />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/DockerCommands.js',
  },
  {
    path: '/faucets',
    section: 'main',
    exact: true,
    name: 'Faucets',
    description: `Get Ropsten ETH, Testnet BTC, and a KEEP token grant for
      testing purposes`,
    content: () => <Faucets />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/Faucets.js',
  },
  {
    path: '/keystore-tools',
    section: 'main',
    exact: true,
    name: 'Keystore Tools',
    description: `Generate an Ethereum wallet in the format required for the
      Keep node operator wallet`,
    content: () => <KeystoreTools />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/KeystoreTools.js',
  },
  {
    path: '/address-list',
    section: 'main',
    exact: true,
    name: 'Address List',
    description: `An up-to-date list of all of the relevant Ethereum addresses
      associated with Keep`,
    content: () => <AddressList />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/AddressList.js',
  },
  {
    path: '/github-repos',
    section: 'main',
    exact: true,
    name: 'GitHub Repositories',
    description: `A convenient index of GitHub repositories associated with
      the Keep project`,
    content: () => <GitHubRepos />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/GitHubRepos.js',
  },
  {
    path: '/comparison/cosmos-validator',
    section: 'comparison',
    exact: true,
    name: 'Cosmos Validator',
    description: ``,
    content: () => <ComparisonCosmosValidator />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/ComparisonCosmosValidator.js',
  },
  {
    path: '/comparison/renvm-darknode',
    section: 'comparison',
    exact: true,
    name: 'RenVM Darknode',
    description: ``,
    content: () => <ComparisonRenVMDarknode />,
    gitHubUrl: 'https://github.com/kferretcrypto/keep-tools/tree/master/src/components/pages/ComparisonRenVMDarknode.js',
  },
]

const sections = [
  {
    id: 'home',
    name: null,
  },
  {
    id: 'main',
    name: null,
  },
  {
    id: 'comparison',
    name: 'Comparison Guides',
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubUrl: 'https://github.com/kferretcrypto/keep-tools',
    }
  }

  updateGitHubUrl = (gitHubUrl) => {
    if (gitHubUrl && this.state.gitHubUrl !== gitHubUrl) {
      this.setState({
        gitHubUrl,
      })
    }
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Header gitHubUrl={this.state.gitHubUrl} />
        <Body>
          <LeftNav routes={routes} sections={sections} />
          <Content>
            <Switch>
              {
                routes.map(({ path, exact, name, title, content, gitHubUrl }) => (
                  <Route exact={exact} path={path} key={path}>
                    <Page name={name} title={title} onRender={this.updateGitHubUrl.bind(this, gitHubUrl)}>
                      { content() }
                    </Page>
                  </Route>
                ))
              }
            </Switch>
          </Content>
        </Body>
      </Layout>
    )
  }
}

const Page = ({ name, title, children, match, onRender }) => {
  onRender()
  useEffect(() => {
    document.title = title || `${name} - Keep Tools`
  })
  return children
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
    font-family: Nunito Sans;
  }
`

const Layout = styled.div`
`

const Body = styled.div`
  margin: 0 auto;
  padding: 30px 10px;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 980px) {
    width: 960px;
    flex-direction: row;
  }
`

const Content = styled.div`
  flex: 1;

  @media only screen and (min-width: 980px) {
    padding: 0 0 0 54px;
  }
`

export default App
