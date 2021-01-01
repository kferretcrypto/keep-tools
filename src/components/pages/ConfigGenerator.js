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

// Mainnet
const MAINNET_BEACON_TEMPLATE = (v) =>
  `[ethereum]
  URL = "wss://mainnet.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://mainnet.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-beacon-client/keystore/${v['beacon_keyfile']}"

[ethereum.ContractAddresses]
  KeepRandomBeaconOperator = "0xdf708431162ba247ddae362d2c919e0fbafcf9de"
  TokenStaking = "0x1293a54e160d1cd7075487898d65266081a15458"
  KeepRandomBeaconService = "0x50510e691c90ea098e3fdd23c311731bf394aafd"

[LibP2P]
  Peers = ["/ip4/54.39.179.73/tcp/3919/ipfs/16Uiu2HAkyYtzNoWuF3ULaA7RMfVAxvfQQ9YRvRT3TK4tXmuZtaWi","/ip4/54.39.186.166/tcp/3919/ipfs/16Uiu2HAkzD5n4mtTSddzqVY3wPJZmtvWjARTSpr4JbDX9n9PDJRh","/ip4/54.39.179.134/tcp/3919/ipfs/16Uiu2HAkuxCuWA4zXnsj9R6A3b3a1TKUjQvBpAEaJ98KGdGue67p","/dns4/bst-a01.core.keep.boar.network/tcp/3001/ipfs/16Uiu2HAkzYFHsqbwt64ZztWWK1hyeLntRNqWMYFiZjaKu1PZgikN","/dns4/bst-b01.core.keep.boar.network/tcp/3001/ipfs/16Uiu2HAkxLttmh3G8LYzAy1V1g1b3kdukzYskjpvv5DihY4wvx7D","/dns4/4d00662f-e56d-404a-803a-cac01ada3e15.keep.bison.run/tcp/3919/ipfs/16Uiu2HAmV3HqJjcbKMxHnDxDx4m2iEYynyYdsvU3VwaeE6Zra2P9","/dns4/ec1eb390-124c-4b1b-bcf7-c21709baf2b2.keep.herd.run/tcp/3919/ipfs/16Uiu2HAmVo51PqEZLADehZEbZnrp5A7qjRWFLj9E7DfwZKVhERFt","/dns4/2aa9b786-7360-4c22-ae73-bd95af9c11c5.keep.bison.run/tcp/3919/ipfs/16Uiu2HAm9g3QrQzSvJ8FAhgB1PmjMNgjPd3pDaJJqsdSisGsnaFe"]
  Port = 3919
  AnnouncedAddresses = ["/ip4/${v['server_ip']}/tcp/3920"]

[Storage]
  DataDir = "/mnt/keep-beacon-client/persistence"`

const MAINNET_ECDSA_TEMPLATE = (v) =>
  `[ethereum]
  URL = "wss://mainnet.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://mainnet.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-ecdsa-client/keystore/${v['ecdsa_keyfile']}"

[ethereum.ContractAddresses]
  BondedECDSAKeepFactory = "0xA7d9E842EFB252389d613dA88EDa3731512e40bD"

[SanctionedApplications]
  Addresses = [
    "0xe20A5C79b39bC8C363f0f49ADcFa82C2a01ab64a"
  ]

[LibP2P]
  Peers = ["/dns4/bst-a01.ecdsa.keep.boar.network/tcp/4001/ipfs/16Uiu2HAkzYFHsqbwt64ZztWWK1hyeLntRNqWMYFiZjaKu1PZgikN","/dns4/bst-b01.ecdsa.keep.boar.network/tcp/4001/ipfs/16Uiu2HAkxLttmh3G8LYzAy1V1g1b3kdukzYskjpvv5DihY4wvx7D"]
  Port = 3919

[Storage]
  DataDir = "/mnt/keep-ecdsa-client/persistence"

[TSS]
  PreParamsGenerationTimeout = "2m30s"
  
[Extensions.TBTC]
  TBTCSystem = "0xe20A5C79b39bC8C363f0f49ADcFa82C2a01ab64a"`

// Ropsten

const ROPSTEN_BEACON_TEMPLATE = (v) =>
  `[ethereum]
  URL = "wss://ropsten.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://ropsten.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-beacon-client/keystore/${v['beacon_keyfile']}"

[ethereum.ContractAddresses]
  KeepRandomBeaconOperator = "0xC8337a94a50d16191513dEF4D1e61A6886BF410f"
  TokenStaking = "0x234d2182B29c6a64ce3ab6940037b5C8FdAB608e"
  KeepRandomBeaconService = "0x6c04499B595efdc28CdbEd3f9ed2E83d7dCCC717"

[LibP2P]
  Peers = ["/dns4/bootstrap-1.core.keep.test.boar.network/tcp/3001/ipfs/16Uiu2HAkuTUKNh6HkfvWBEkftZbqZHPHi3Kak5ZUygAxvsdQ2UgG","/dns4/bootstrap-2.core.keep.test.boar.network/tcp/3001/ipfs/16Uiu2HAmQirGruZBvtbLHr5SDebsYGcq6Djw7ijF3gnkqsdQs3wK","/dns4/bootstrap-3.test.keep.network/tcp/3919/ipfs/16Uiu2HAm8KJX32kr3eYUhDuzwTucSfAfspnjnXNf9veVhB12t6Vf","/dns4/bootstrap-2.test.keep.network/tcp/3919/ipfs/16Uiu2HAmNNuCp45z5bgB8KiTHv1vHTNAVbBgxxtTFGAndageo9Dp"]
  Port = 3919
  AnnouncedAddresses = ["/ip4/${v['server_ip']}/tcp/3920"]

[Storage]
  DataDir = "/mnt/keep-beacon-client/persistence"`

const ROPSTEN_ECDSA_TEMPLATE = (v) =>
  `[ethereum]
  URL = "wss://ropsten.infura.io/ws/v3/${v['infura_id']}"
  URLRPC = "https://ropsten.infura.io/v3/${v['infura_id']}"

[ethereum.account]
  Address = "${v['operator_address']}"
  KeyFile = "/mnt/keep-ecdsa-client/keystore/${v['ecdsa_keyfile']}"

[ethereum.ContractAddresses]
  BondedECDSAKeepFactory = "0x9EcCf03dFBDa6A5E50d7aBA14e0c60c2F6c575E6"

[SanctionedApplications]
  Addresses = [
    "0xc3f96306eDabACEa249D2D22Ec65697f38c6Da69"
  ]

[LibP2P]
  Peers = ["/dns4/bootstrap-1.ecdsa.keep.test.boar.network/tcp/4001/ipfs/16Uiu2HAmPFXDaeGWtnzd8s39NsaQguoWtKi77834A6xwYqeicq6N","/dns4/ecdsa-2.test.keep.network/tcp/3919/ipfs/16Uiu2HAmNNuCp45z5bgB8KiTHv1vHTNAVbBgxxtTFGAndageo9Dp","/dns4/ecdsa-3.test.keep.network/tcp/3919/ipfs/16Uiu2HAm8KJX32kr3eYUhDuzwTucSfAfspnjnXNf9veVhB12t6Vf"]
  Port = 3919

[Storage]
  DataDir = "/mnt/keep-ecdsa-client/persistence"

[TSS]
  PreParamsGenerationTimeout = "2m30s"
 
[Extensions.TBTC]
  TBTCSystem = "0xc3f96306eDabACEa249D2D22Ec65697f38c6Da69"`

const templates = [
  {
    id: 'ropsten_beacon',
    name: 'Ropsten - Random Beacon',
    fields: ['infura_id', 'operator_address', 'beacon_keyfile', 'server_ip'],
    template: ROPSTEN_BEACON_TEMPLATE,
  },
  {
    id: 'ropsten_ecdsa',
    name: 'Ropsten - ECDSA',
    fields: ['infura_id', 'operator_address', 'ecdsa_keyfile'],
    template: ROPSTEN_ECDSA_TEMPLATE,
  },
  {
    id: 'mainnet_beacon',
    name: 'Mainnet - Random Beacon',
    fields: ['infura_id', 'operator_address', 'beacon_keyfile', 'server_ip'],
    template: MAINNET_BEACON_TEMPLATE,
  },
  {
    id: 'mainnet_ecdsa',
    name: 'Mainnet - ECDSA',
    fields: ['infura_id', 'operator_address', 'ecdsa_keyfile'],
    template: MAINNET_ECDSA_TEMPLATE,
  },
]

class ConfigGenerator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTemplate: templates[0].id,
      fields: FIELDS.reduce(
        (fieldsObj, field) => ({
          ...fieldsObj,
          [field.id]: field.defaultValue || '',
        }),
        {}
      ),
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

    const template = templates.find((t) => t.id === selectedTemplate)

    return (
      <React.Fragment>
        <H1>Config Generator</H1>
        <H2>Template Type</H2>
        {templates.map((t) => [
          <RadioInput
            key={t.id}
            id={t.id}
            checked={t.id === selectedTemplate}
            onChange={() => {
              this.setState({ selectedTemplate: t.id })
            }}
          />,
          <RadioInputLabel key={t.id + '-label'} htmlFor={t.id}>
            {t.name}
          </RadioInputLabel>,
        ])}

        <br />
        <br />
        <H2>Parameters</H2>
        {FIELDS.filter((field) => template.fields.includes(field.id)).map(
          (field) => (
            <TextInputWithLabel
              key={field.name}
              label={field.name}
              placeholder={field.placeholder}
              value={fields[field.id]}
              onChange={this.handleFieldChange.bind(this, field.id)}
            />
          )
        )}
        <br />
        <H2>Config Output (config/config.toml)</H2>
        <ConfigTextarea value={template.template(fields)} />
      </React.Fragment>
    )
  }
}

const RadioInput = styled.input.attrs((props) => ({
  type: 'radio',
}))`
  margin: 0 10px 0 20px;
  &:first-of-type {
    margin-left: 0;
  }
`

const RadioInputLabel = styled.label`
  font-size: 14px;
`

const ConfigTextarea = styled.textarea.attrs((props) => ({
  spellCheck: false,
  readOnly: true,
}))`
  width: 100%;
  height: 42em;
  margin-bottom: 36px;
  box-sizing: border-box;
`

export default ConfigGenerator
