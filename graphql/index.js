const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const authModule = require("./auth");

const server = express();
module.exports = server;

const apolloServer = new ApolloServer({
  modules: [
    authModule,
  ],
  context: ({ req, res }) => {
    return { req, res };
  },
});

apolloServer.applyMiddleware({
  app: server,
  path: "/",
});
