import React from 'react';
import { Text, View } from 'react-native';

import Booklist from './Booklist';
import InputBox from './components/InputBox';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Booklist />
        <InputBox />
      </View>
    );
  }
}

export default SettingsScreen;
