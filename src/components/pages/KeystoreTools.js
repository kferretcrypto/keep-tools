import React from 'react'
import styled from 'styled-components'
import keythereum from 'keythereum-pure-js'

import { H1, H2 } from '../common/H'
import TextInputWithLabel from '../common/TextInputWithLabel'

class KeystoreTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passphrase: '',
      key: '',
    }
  }

  handlePassphraseChange = (event) => {
    const { value } = event.target
    this.setState({
      passphrase: value,
    })
  }

  generateKey = () => {
    this.setState({
      key: 'Working...',
    })

    setTimeout(() => {
      const dk = keythereum.create()
      const keyObject = keythereum.dump(
        this.state.passphrase,
        dk.privateKey,
        dk.salt,
        dk.iv
      )

      this.setState({
        key: JSON.stringify(keyObject),
      })
    })

  }

  render() {
    return (
      <React.Fragment>
        <H1>Keystore Tools</H1>
        <p><strong>Important: This is for testing only! It is not secure to use
        any key generated on this page to store real funds. Assume that it is
        compromised.</strong></p>
        <TextInputWithLabel
          type="password"
          label="Passphrase"
          value={this.state.passphrase}
          onChange={this.handlePassphraseChange}
        />
        <Button
          onClick={this.generateKey}
        >
          Generate Key
        </Button>
        <br />
        <H2>Keyfile (keystore/keep_wallet.json)</H2>
        <Textarea value={this.state.key} />
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

const Textarea = styled.textarea.attrs(props => ({
  spellCheck: false,
  readOnly: true,
}))`
  width: 100%;
  height: 10em;
  margin-bottom: 36px;
  box-sizing: border-box;
`

export default KeystoreTools
