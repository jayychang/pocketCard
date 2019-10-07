import React, { useState } from 'react'

import { Input, Button } from './styles'

import { useSetNewCardAction } from 'src/redux/hooks/actions/cards'

const NewCardForm = () => {
  const [nameState, setNameState] = useState('');
  const [valueState, setValueState] = useState(undefined);
  const [colourState, setColourState] = useState(0);

  const setNewCard = useSetNewCardAction()

  return (
    <>
      <Input value={ nameState } onChange={ setNameState } />
      <Input value={ valueState } onChange={ setValueState } />
      <Input value={ colourState } onChange={ setColourState } />
      <Button onPress={ () => { setNewCard({name: nameState, value: valueState, colour: colourState }) } } />
    </>
  )
}

export default NewCardForm
