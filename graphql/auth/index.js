const { gql } = require("apollo-server-express");

module.exports = {
  typeDefs: gql`
    type Query {
      user: String
    }
  `,
  resolvers: {
    Query: {
      async user(parent, args, context, info) {
        return "user@example.com";
      },
    },
  },
};
