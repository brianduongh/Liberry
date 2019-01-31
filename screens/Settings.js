import React from 'react';
import { Text, View } from 'react-native';

import Booklist from './Booklist';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Booklist />
      </View>
    );
  }
}

export default SettingsScreen;
