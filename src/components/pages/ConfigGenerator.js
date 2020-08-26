import React from 'react'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'
import TextInputWithLabel from '../common/TextInputWithLabel'



const FIELDS = [
  {
    id: 'infura_id',
    name: 'Infura Project ID',
    placeholder: 'abc123def456ghi789jkl123mno456pq',
  },
  {
    id: 'operator_address',
    name: 'Operator Address',
    placeholder: '0x0000000000000000000000000000000000000000',
  },
  {
    id: 'beacon_keyfile',
    name: 'Beacon Keyfile Name',
    defaultValue: 'keep_wallet.json',
    placeholder: 'keep_wallet.json',
  },
  {
    id: 'ecdsa_keyfile',
    name: 'ECDSA Keyfile Name',
    defaultValue: 'keep_wallet.json',
    placeholder: 'keep_wallet.json',
  },
  {
    id: 'server_ip',
    name: 'Node Public IP',
    placeholder: '0.0.0.0',
  },
]

const BEACON_TEMPLATE = (v) => (
`[ethereum]
  URL = "wss://ropsten.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://ropsten.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-beacon-client/keystore/${v['beacon_keyfile']}"

[ethereum.ContractAddresses]
  KeepRandomBeaconOperator = "0xf417b31104631280adF9F6828ee19985BC299fdC"
  TokenStaking = "0x8117632eC1D514550b3880Bc68F9AC1A76c9C67B"
  KeepRandomBeaconService = "0xd83248e311DC2Ba0d2A051e86f0678d8857f6ADD"

[LibP2P]
  Peers = ["/dns4/bootstrap-1.core.keep.test.boar.network/tcp/3001/ipfs/16Uiu2HAkuTUKNh6HkfvWBEkftZbqZHPHi3Kak5ZUygAxvsdQ2UgG","/dns4/bootstrap-2.core.keep.test.boar.network/tcp/3001/ipfs/16Uiu2HAmQirGruZBvtbLHr5SDebsYGcq6Djw7ijF3gnkqsdQs3wK","/dns4/bootstrap-3.test.keep.network/tcp/3919/ipfs/16Uiu2HAm8KJX32kr3eYUhDuzwTucSfAfspnjnXNf9veVhB12t6Vf","/dns4/bootstrap-2.test.keep.network/tcp/3919/ipfs/16Uiu2HAmNNuCp45z5bgB8KiTHv1vHTNAVbBgxxtTFGAndageo9Dp"]
  Port = 3919
  AnnouncedAddresses = ["/ip4/${v['server_ip']}/tcp/3920"]

[Storage]
  DataDir = "/mnt/keep-beacon-client/persistence"`
)

const ECDSA_TEMPLATE = (v) => (
`[ethereum]
  URL = "wss://ropsten.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://ropsten.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-ecdsa-client/keystore/${v['ecdsa_keyfile']}"

[ethereum.ContractAddresses]
  BondedECDSAKeepFactory = "0xb37c8696cD023c11357B37b5b12A9884c9C83784"

[SanctionedApplications]
  Addresses = [
    "0x9F3B3bCED0AFfe862D436CB8FF462a454040Af80"
  ]

[LibP2P]
  Peers = ["/dns4/bootstrap-1.ecdsa.keep.test.boar.network/tcp/4001/ipfs/16Uiu2HAmPFXDaeGWtnzd8s39NsaQguoWtKi77834A6xwYqeicq6N","/dns4/ecdsa-2.test.keep.network/tcp/3919/ipfs/16Uiu2HAmNNuCp45z5bgB8KiTHv1vHTNAVbBgxxtTFGAndageo9Dp","/dns4/ecdsa-3.test.keep.network/tcp/3919/ipfs/16Uiu2HAm8KJX32kr3eYUhDuzwTucSfAfspnjnXNf9veVhB12t6Vf"]
  Port = 3919

[Storage]
  DataDir = "/mnt/keep-ecdsa-client/persistence"

[TSS]
  PreParamsGenerationTimeout = "2m30s"`
)

const templates = [
  {
    id: 'beacon',
    name: 'Ropsten - Random Beacon',
    fields: [
      'infura_id',
      'operator_address',
      'beacon_keyfile',
      'server_ip',
    ],
    template: BEACON_TEMPLATE,
  },
  {
    id: 'ecdsa',
    name: 'Ropsten - ECDSA',
    fields: [
      'infura_id',
      'operator_address',
      'ecdsa_keyfile',
    ],
    template: ECDSA_TEMPLATE,
  },
]

class ConfigGenerator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTemplate: templates[0].id,
      fields: FIELDS.reduce((fieldsObj, field) => ({
        ...fieldsObj,
        [field.id]: field.defaultValue || '',
      }), {})
    }
  }

  handleFieldChange = (fieldId, event) => {
    const { value } = event.target
    this.setState((state) => ({
      fields: {
        ...state.fields,
        [fieldId]: value,
      },
    }))
  }

  render() {
    const { selectedTemplate, fields } = this.state

    const template = templates.find(t => t.id === selectedTemplate)

    return (
      <React.Fragment>
        <H1>Config Generator</H1>
        <H2>Template Type</H2>
        {
          templates.map(t => (
            [
              <RadioInput
                id={t.id}
                checked={t.id === selectedTemplate}
                onChange={() => { this.setState({ selectedTemplate: t.id }) }}
              />,
              <label for={t.id}>
                { t.name }
              </label>,
            ]
          ))
        }

        <br />
        <br />
        <H2>Parameters</H2>
        {
          FIELDS.filter(field => template.fields.includes(field.id)).map(field => (
            <TextInputWithLabel
              label={field.name}
              placeholder={field.placeholder}
              value={fields[field.id]}
              onChange={this.handleFieldChange.bind(this, field.id)}
            />
          ))
        }
        <br />
        <H2>Config Output (config/config.toml)</H2>
        <ConfigTextarea value={template.template(fields)} />
      </React.Fragment>
    )
  }
}

const RadioInput = styled.input.attrs(props => ({
  type: 'radio',
}))`
  margin: 0 10px 0 30px;
  &:first-of-type { margin-left: 0; }
`

const ConfigTextarea = styled.textarea.attrs(props => ({
  spellCheck: false,
}))`
  width: 100%;
  height: 34em;
  margin-bottom: 36px;
  box-sizing: border-box;
`


export default ConfigGenerator
