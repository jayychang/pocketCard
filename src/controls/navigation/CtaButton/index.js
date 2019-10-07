import React from 'react'

import { ButtonContainer, Icon } from './styles'

import Icons from 'assets/icons'

const CtaButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={ onPress }>
      <Icon source={ Icons.dots } />
    </ButtonContainer>
  )
}

export default CtaButton
