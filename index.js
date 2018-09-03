const { ApolloServer, gql } = require('apollo-server');

import {Query, Schema, Game, Publisher} from './schema/Schema.js';
import Resolvers from './resolvers/Resolver.js';

const server = new ApolloServer({
  typeDefs: [Query, Schema, Game, Publisher],
  resolvers: Resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});