import React, { useState } from 'react'

import { CtaButton, Alert, RowButton } from './styles'

import { push, Routes } from 'src/helpers/navigation'

const CardsCtaButton = ({ isFocus }) => {
  const [isOpenState, setIsOpenState] = useState(false)

  return (
    <>
      <CtaButton onPress={ () => { setIsOpenState(true) } } />
      <Alert
        isOpen={ isOpenState }
        onDismiss={ () => { setIsOpenState(false) } }
      >
        <RowButton title="Add new card" onPress={ () => {  setIsOpenState(false); push(Routes.ADD_CARD); } } />
      </Alert>
    </>
  )
}

export default CardsCtaButton
