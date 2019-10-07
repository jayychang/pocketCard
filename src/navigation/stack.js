import { createStackNavigator } from 'react-navigation-stack';

import CardsScreen from 'src/screens/Cards'
import AddCardScreen from 'src/screens/AddCard'

import { Routes } from 'src/helpers/navigation';

const Stack = createStackNavigator({
  [Routes.CARDS]: {
    screen: CardsScreen,
  },
  [Routes.ADD_CARD]: {
    screen: AddCardScreen,
  },
})

export default Stack
