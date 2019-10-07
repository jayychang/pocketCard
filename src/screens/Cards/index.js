import React from 'react'

import { CardCarousel, CardsCtaButton, Container } from './styles'

const CardsScreen = () => (
  <Container>
    <CardCarousel />
  </Container>
)

CardsScreen.navigationOptions = () => ({
  headerRight: <CardsCtaButton />,
})
export default CardsScreen
