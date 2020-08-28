import React from 'react'
import styled from 'styled-components'

const TextInputWithLabel = ({ label, onChange, value, placeholder, type }) => (
  <StyledTextInputWithLabel>
    <Label>{label}</Label>
    <Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  </StyledTextInputWithLabel>
)

const StyledTextInputWithLabel = styled.div`
  display: flex;

  margin-bottom: 14px;

  align-items: center;
`

const Label = styled.label`
  flex: 1;
`

const Input = styled.input.attrs((props) => ({
  type: props.type ? props.type : 'text',
  spellCheck: false,
  placeholder: props.placeholder,
}))`
  flex: 2;
  line-height: 30px;
  padding: 0 8px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`

export default TextInputWithLabel
