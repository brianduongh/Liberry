import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import TabNavigator from './Navigation.js';
import client from './apollo';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <TabNavigator />
      </ApolloProvider>
    );
  }
}
