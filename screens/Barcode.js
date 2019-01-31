import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    title: '',
    author: ''
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}+isbn&key=AIzaSyCekaWwYYUa61_90Z8UVPjdoYvVAWTkqhI`)
    .then(response => {
      alert(response.data.items[0].volumeInfo.title);
    })
    .catch(error => console.log(error));
    this.props.navigation.navigate('Books');
  }
}
