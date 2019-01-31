import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const fetchBooks = gql`
query {
  Books {
    title
    author
    summary
    cover
  }
}
`

const Booklist = ({ items }) => (
  <SafeAreaView>
  <Text h3 style={{ textAlign: 'center' }}>Liberry</Text>
  <ScrollView>
  <Query query={fetchBooks}>
    {
      ({ loading, data, error}) => {
        if (loading) {
          return(
            <View>
              <Text>Loading</Text>
            </View>
          );
        }

        if (error) {
          return(
            <View>
              <Text>Error</Text>
            </View>
          );
        }

        return data.Books.map((book, i) => (
            <Card
              key={i}
              title={book.title}
              image={{ uri: book.cover }}
              style={{ padding: 5 }}
            >
              <Text>{book.author}</Text>
              <Text>{book.summary}</Text>
            </Card>
        ));
      }
    }
  </Query>
  </ScrollView>
  </SafeAreaView>
);

export default Booklist;
