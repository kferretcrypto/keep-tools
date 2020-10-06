import React from 'react'
import styled from 'styled-components'

import { H1, H2 } from '../common/H'
import TextInputWithLabel from '../common/TextInputWithLabel'

const FIELDS = [
  {
    id: 'beacon_config_path',
    name: 'Beacon Config Path',
    defaultValue: '~/keep/beacon/config',
    placeholder: '~/keep/beacon/config',
  },
  {
    id: 'beacon_persistence_path',
    name: 'Beacon Persistence Path',
    defaultValue: '~/keep/beacon/persistence',
    placeholder: '~/keep/beacon/persistence',
  },
  {
    id: 'beacon_keystore_path',
    name: 'Beacon Keystore Path',
    defaultValue: '~/keep/beacon/keystore',
    placeholder: '~/keep/beacon/keystore',
  },
  {
    id: 'beacon_key_password',
    name: 'Beacon Key Password',
  },
  {
    id: 'ecdsa_config_path',
    name: 'ECDSA Config Path',
    defaultValue: '~/keep/ecdsa/config',
    placeholder: '~/keep/ecdsa/config',
  },
  {
    id: 'ecdsa_persistence_path',
    name: 'ECDSA Persistence Path',
    defaultValue: '~/keep/ecdsa/persistence',
    placeholder: '~/keep/ecdsa/persistence',
  },
  {
    id: 'ecdsa_keystore_path',
    name: 'ECDSA Keystore Path',
    defaultValue: '~/keep/ecdsa/keystore',
    placeholder: '~/keep/ecdsa/keystore',
  },
  {
    id: 'ecdsa_key_password',
    name: 'ECDSA Key Password',
  },
]

const RUN_BEACON_CMD = (v) =>
  `docker run -d \\
--entrypoint keep-client \\
--restart always \\
--volume ${v['beacon_config_path']}:/mnt/keep-beacon-client/config \\
--volume ${v['beacon_persistence_path']}:/mnt/keep-beacon-client/persistence \\
--volume ${v['beacon_keystore_path']}:/mnt/keep-beacon-client/keystore \\
--env KEEP_ETHEREUM_PASSWORD="${v['beacon_key_password']}" \\
--env LOG_LEVEL=debug \\
--log-opt max-size=100m \\
--log-opt max-file=3 \\
--name beacon-node \\
-p 3920:3919 \\
keepnetwork/keep-client:v1.3.0 --config /mnt/keep-beacon-client/config/config.toml start`

const RUN_ECDSA_CMD = (v) =>
  `docker run -d \\
--entrypoint keep-ecdsa \\
--restart always \\
--volume ${v['ecdsa_config_path']}:/mnt/keep-ecdsa-client/config \\
--volume ${v['ecdsa_persistence_path']}:/mnt/keep-ecdsa-client/persistence \\
--volume ${v['ecdsa_keystore_path']}:/mnt/keep-ecdsa-client/keystore \\
--env KEEP_ETHEREUM_PASSWORD="${v['ecdsa_key_password']}" \\
--env LOG_LEVEL=debug \\
--log-opt max-size=100m \\
--log-opt max-file=3 \\
--name ecdsa-node \\
-p 3919:3919 \\
keepnetwork/keep-ecdsa-client:v1.3.0 --config /mnt/keep-ecdsa-client/config/config.toml start`

const PS_CMD = () => `docker ps`

const LOGS_BEACON_CMD = () => `docker logs beacon-node`

const LOGS_ECDSA_CMD = () => `docker logs ecdsa-node`

const RESTART_BEACON_CMD = () => `docker restart beacon-node`

const RESTART_ECDSA_CMD = () => `docker restart ecdsa-node`

const STOP_BEACON_CMD = () => `docker stop beacon-node`

const STOP_ECDSA_CMD = () => `docker stop ecdsa-node`

const START_BEACON_CMD = () => `docker start beacon-node`

const START_ECDSA_CMD = () => `docker start ecdsa-node`

const RM_BEACON_CMD = () => `docker rm beacon-node`

const RM_ECDSA_CMD = () => `docker rm ecdsa-node`

const HELP_CMD = () => `docker help`

class DockerCommands extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
    const { fields } = this.state
    return (
      <React.Fragment>
        <H1>Docker Commands</H1>
        <H2>Parameters</H2>
        {FIELDS.map((field) => (
          <TextInputWithLabel
            key={field.name}
            label={field.name}
            placeholder={field.placeholder}
            value={fields[field.id]}
            onChange={this.handleFieldChange.bind(this, field.id)}
          />
        ))}
        <br />
        <H2>Setup and Start - Random Beacon</H2>
        <CommandTextareaBig value={RUN_BEACON_CMD(fields)} />

        <H2>Setup and Start - ECDSA</H2>
        <CommandTextareaBig value={RUN_ECDSA_CMD(fields)} />

        <H2>List Containers</H2>
        <Description>Use this to check the status of your nodes</Description>
        <CommandTextarea value={PS_CMD()} />

        <H2>Logs</H2>
        <Description>
          Add parameters like <code>--since 30m</code> for logs from past 30
          minutes or <code>-f</code> to continuously follow logs
        </Description>
        <CommandTextarea value={LOGS_BEACON_CMD()} stacked={true} />
        <CommandTextarea value={LOGS_ECDSA_CMD()} />

        <H2>Restart</H2>
        <CommandTextarea value={RESTART_BEACON_CMD()} stacked={true} />
        <CommandTextarea value={RESTART_ECDSA_CMD()} />

        <H2>Stop</H2>
        <CommandTextarea value={STOP_BEACON_CMD()} stacked={true} />
        <CommandTextarea value={STOP_ECDSA_CMD()} />

        <H2>Start</H2>
        <CommandTextarea value={START_BEACON_CMD()} stacked={true} />
        <CommandTextarea value={START_ECDSA_CMD()} />

        <H2>Delete</H2>
        <CommandTextarea value={RM_BEACON_CMD()} stacked={true} />
        <CommandTextarea value={RM_ECDSA_CMD()} />

        <H2>Docker Help</H2>
        <CommandTextarea value={HELP_CMD()} />
      </React.Fragment>
    )
  }
}

const CommandTextareaBig = styled.textarea.attrs((props) => ({
  spellCheck: false,
  readOnly: true,
}))`
  width: 100%;
  height: 16em;
  margin-bottom: 36px;
  box-sizing: border-box;
`

const CommandTextarea = styled.textarea.attrs((props) => ({
  spellCheck: false,
  readOnly: true,
}))`
  width: 100%;
  height: 2em;
  margin-bottom: ${(props) => (props.stacked ? '4px' : '36px')};
  box-sizing: border-box;
`

const Description = styled.p`
  margin: -4px 0 4px 0;
`

export default DockerCommands
