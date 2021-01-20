import { gql } from "@apollo/client";

export const LOAD_CONTACTS = gql`
  query {
    contacts {
      id
      firstName
      lastName
      phone
      email
    }
  }
`;
