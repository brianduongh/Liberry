import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native'
import Barcode from './Barcode';

class Scanner extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false
    };
  }

  componentDidMount() {
    this.focusListner = this.props.navigation.addListener(
      'didFocus',
      () => this.setState({ isFocused: true }),
    );
    this.blurListner = this.props.navigation.addListener(
      'willBlur',
      () => this.setState({ isFocused: false }),
    );
  }
  componentWillUnmount() {
    this.foucsListner.remove();
    this.blurListner.remove();
  }

  render() {
    if (!this.state.isFocused) {
      return (
        <View contentContainerStyle={styles.container} style={styles.spinner}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
    return (<Barcode navigation={this.props.navigation} />);
  }
}

const styles = {
  container: {
    flexGrow: 1
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Scanner;
