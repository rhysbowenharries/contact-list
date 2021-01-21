import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation addContact(
    $firstName: String!
    $lastName: String!
    $phone: String
    $email: String
  ) {
    addContact(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;
