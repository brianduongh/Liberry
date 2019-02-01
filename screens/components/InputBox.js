import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Mutation } from 'react-apollo';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import gql from 'graphql-tag';
import { fetchBooks } from '../Booklist';

const insertBook = gql`
mutation ($title: String!) {
  insert_book (
    objects: [
      {
        title: $title
      }
    ]
  ) {
    returning {
      ...insertBookResp
    }
  }
}

fragment insertBookResp on books {
  id
  title
}
`

class InputBox extends Component {
  state = {
    isbn: '',
    title: '',
    author: '',
    summary: '',
    cover: ''
  }

  render() {
    const { title, isbn } = this.state;
    return(
      <Mutation
        mutation={insertBook}
        variables={{
          title
        }}
        update={(cache, { data: {insert_book} }) => {
          const data = cache.readQuery({ query: fetchBooks });
          const newBook = insert_book.returning[0];
          const newData = {
            Books: [ newBook, ...data.Books ]
          }
          cache.writeQuery({
            query: fetchBooks,
            data: newData
          });
        }}
      >
        {
          (insertBook, {data, loading, error}) => {
            const onSubmit = () => {
              axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.isbn}+isbn&key=${APIKEY}`)
              .then(response => {
                this.setState({
                  title: response.data.items[0].volumeInfo.title,
                  author: response.data.items[0].volumeInfo.authors[0],
                  summary: response.data.items[0].volumeInfo.description,
                  cover: response.data.items[0].volumeInfo.imageLinks.thumbnail
                });
                alert(this.state.cover);
              })
              .catch(error => console.log(error))
              this.setState({ isbn: '' });
              insertBook();
            }
            return(
              <View>
                <Input
                  placeholder='BASIC INPUT'
                  value={isbn}
                  onChangeText={inputIsbn => this.setState({ isbn: inputIsbn })}
                />
                <Button
                  style={{ flex: 0.1, marginLeft: 15 }}
                  onPress={onSubmit}
                  onSubmitEditing={onSubmit}
                >
                  <Text> Add </Text>
                </Button>
              </View>
            )
          }
        }
      </Mutation>
    )
  }
}

export default InputBox;
