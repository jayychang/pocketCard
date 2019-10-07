import React, { useEffect } from 'react';
import { withNavigationFocus } from 'react-navigation'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { Modal, Container, HandlebarContainer, Handlebar, Content, IphoneXPadding } from './styles'
import RowButton from './RowButton'

const Alert = ({ isOpen, onDismiss, children, isFocus }) => {
  useEffect(() => {
    if (!isFocus) {
      onDismiss()
    }
  }, [isFocus])

  return (
    <Modal
      isVisible={ isOpen }
      backdropOpacity={ 0.5 }
      swipeDirection={ ['down'] }
      onBackdropPress={ onDismiss }
      onSwipeComplete={ onDismiss }
    >
      <Container>
        <HandlebarContainer>
          <Handlebar />
        </HandlebarContainer>
        <Content>
          { children }
        </Content>
        <>
          { ifIphoneX && <IphoneXPadding /> }
        </>
      </Container>
    </Modal>
  )
}

export { RowButton }
export default withNavigationFocus(Alert)
