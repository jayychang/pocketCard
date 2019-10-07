// @flow

import { useDispatch } from 'react-redux'

const ADD_NEW_CARD = 'cards/new-card/add'

type CardParams = {
  name: string, value: number, colour: string
}

export const useSetNewCardAction = () => {
  const dispatch = useDispatch()
  return (
    ({ name, value, colour }: CardParams) => dispatch({
      type: ADD_NEW_CARD,
      payload: {
        name, value, colour,
      }
    })
  );
};
