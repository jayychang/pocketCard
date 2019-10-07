import React, { useCallback } from 'react'
import { Dimensions } from 'react-native'

import { Carousel, ItemContainer, ItemHeaderText } from './styles'

import { useCardsSelector } from 'src/redux/hooks/selectors/cards'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const CardCarousel = ({ style }) => {
  const cards = useCardsSelector()

  const renderItem = useCallback(({item, index}) => (
    <ItemContainer color={ item.color}>
      <ItemHeaderText>{item.name}</ItemHeaderText>
    </ItemContainer>
  ), [])

  return (
    <Carousel
      style={ style }
      data={ cards }
      renderItem={ renderItem }
      sliderWidth={ viewportWidth }
      itemWidth={ viewportWidth * 0.7 }
    />
  )
}

export default CardCarousel
