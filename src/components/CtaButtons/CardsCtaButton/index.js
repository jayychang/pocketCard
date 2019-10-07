import React, { useState } from 'react'

import CtaButton from 'src/controls/navigation/CtaButton'
import Alert, { RowButton } from 'src/controls/modals/Alert'

const CardsCtaButton = () => {
  const [isOpenState, setIsOpenState] = useState(false)

  return (
    <>
      <CtaButton onPress={ () => { setIsOpenState(true) } } />
      <Alert
        isOpen={ isOpenState }
        onDismiss={ () => { setIsOpenState(false) } }
      >
        <RowButton title="Add new card" onPress={ () => {} } />
      </Alert>
    </>
  )
}

export default CardsCtaButton
