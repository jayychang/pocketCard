import { createStackNavigator } from 'react-navigation-stack';

import CardsScreen from 'src/screens/Cards'

import { Routes } from 'src/constants/navigation';

const Stack = createStackNavigator({
  [Routes.CARDS]: {
    screen: CardsScreen,
  },
})

export default Stack
