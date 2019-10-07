import _Carousel from 'react-native-snap-carousel';
import styled from 'styled-components/native'

export const Carousel = styled(_Carousel)``

export const ItemContainer = styled.View`
  border-radius: 24;
  background-color: ${({ colour }) => colour};
  aspect-ratio: 0.5625;
  padding-vertical: 24;
  padding-horizontal: 24;
`

export const ItemHeaderText = styled.Text`
  align-self: center;
`
