import React from 'react'

import { RowButton, RowButtonText } from './styles'

export default ({ title, onPress }) => (
  <RowButton onPress={ onPress }>
    <RowButtonText>{ title }</RowButtonText>
  </RowButton>
)
