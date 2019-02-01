import React from 'react';
import { Text, View } from 'react-native';

import Booklist from './components/Booklist';

class BookScreen extends React.Component {
  render() {
    return (
      <View>
        <Booklist />
      </View>
    );
  }
}

export default BookScreen;
