import React from 'react'

import CardCarousel from 'src/components/CardCarousel'
import CardsCtaButton from 'src/components/CtaButtons/CardsCtaButton'

import { Container } from './styles'

const CardsScreen = () => (
  <Container>
    <CardCarousel />
  </Container>
)

CardsScreen.navigationOptions = () => ({
  headerRight: <CardsCtaButton />,
})
export default CardsScreen
