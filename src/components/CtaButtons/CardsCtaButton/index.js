import React, { useState } from 'react'

import CtaButton from 'src/controls/navigation/CtaButton'
import Alert, { RowButton } from 'src/controls/modals/Alert'

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
        <RowButton title="Add new card" onPress={ () => { push(Routes.ADD_CARD); setIsOpenState(false) } } />
      </Alert>
    </>
  )
}

export default CardsCtaButton
