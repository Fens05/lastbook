import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//why twice tho? addUser addUser??

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

//this whole part doesnt make a lot of sense to me :(
// how does saveBook know based on context

export const SAVE_BOOK = gql`
  mutation saveBook($Book: Book) {
    saveBook($Book: Book) {
        bookId
        authors
        description
        title
        image
        link
    }
  }
`;

//also this

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: bookId) {
      removeBook($bookId: bookId) {
          
      }
  }
`;