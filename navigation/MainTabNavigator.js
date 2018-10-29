import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DeckScreen from '../screens/DeckScreen';
import AddDeckScreen from '../screens/AddDeckScreen';

const DeckStack = createStackNavigator({
  Deck: DeckScreen,
});

DeckStack.navigationOptions = {
  tabBarLabel: 'Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeckScreen,
});

AddDeckStack.navigationOptions = {
  tabBarLabel: 'AddDeck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  DeckStack,
  AddDeckStack
});
