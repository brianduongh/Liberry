import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, Card, Image } from 'react-native-elements';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  state = {
    books: ''
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=9780060904791+isbn&key=AIzaSyCekaWwYYUa61_90Z8UVPjdoYvVAWTkqhI')
    .then(response => {
      this.setState({ books: response.data.items[0].volumeInfo.title })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Card>
          <View>
            <Text>{this.state.books}</Text>
            <Image
              source={{ uri: 'https://www.sideshowtoy.com/assets/products/903749-iron-man-mark-xlvi-concept-art-version/lg/marvel-iron-man-mark-xlvi-concept-art-version-sixth-scale-figure-hot-toys-903749-01.jpg' }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}
