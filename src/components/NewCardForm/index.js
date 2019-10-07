import React, { useState } from 'react'

import { Input } from './styles'

const NewCardForm = () => {
  const [nameState, setNameState] = useState('');

  return (
    <Input value={ nameState } onChange={ setNameState } />
  )
}

export default NewCardForm
