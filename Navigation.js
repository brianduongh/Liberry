import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Scanner from './screens/Scanner';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Scanner: Scanner
});

export default createAppContainer(TabNavigator);
