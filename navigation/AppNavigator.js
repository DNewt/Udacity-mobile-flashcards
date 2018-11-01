import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import DeckView from '../screens/DeckView'
import Quiz from '../screens/Quiz'
import AddCard from '../screens/AddCard'

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
 
  Main: MainTabNavigator,
  DeckView: {
    screen: DeckView
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  }
});