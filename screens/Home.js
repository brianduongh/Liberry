import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
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
          </View>
        </Card>
      </SafeAreaView>
    );
  }
}
