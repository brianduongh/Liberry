import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Scanner from './screens/Scanner';
import BookScreen from './screens/Books';

const TabNavigator = createBottomTabNavigator({
  Books: {
    screen: BookScreen,
    navigationOptions: {
      tabBarLabel: 'Books',
      tabBarIcon: () => <Ionicons style={{ padding: 5 }} name="ios-book" size={32} />,
    }
  },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      tabBarLabel: 'Scan',
      tabBarIcon: () => <Ionicons style={{ padding: 5 }} name="ios-barcode" size={32} />,
    }
  }
});

export default createAppContainer(TabNavigator);
