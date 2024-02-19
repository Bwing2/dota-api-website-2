const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User

    allUsers: [User]!
    user(username: String!): User
  }
`;

module.exports = typeDefs;
