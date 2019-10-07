import React from 'react'

import { TextInput } from './styles'

const Input = ({ value, onChange }) => {
  return (
    <TextInput
      value={ value }
      onChangeText={ onChange }
    />
  )
}

export default Input
