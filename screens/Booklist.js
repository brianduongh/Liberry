import React from 'react';
import { View, Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const fetchBooks = gql`
query {
  People (
    distinct_on: [name],
    order_by: [{name:desc}]
  ) {
    name
    id
  }
}
`

const Booklist = ({ items }) => (
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

        return data.People.map((people) => (
          <View key={people.id}>
            <Text>{people.name}</Text>
          </View>
        ));
      }
    }
  </Query>
);

export default Booklist;
