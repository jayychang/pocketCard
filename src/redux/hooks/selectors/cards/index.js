import { useSelector } from 'react-redux'

export const useCardsSelector = () => useSelector(state => state.cards)
