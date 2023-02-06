import express from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema'
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

const schema = makeExecutableSchema({ typeDefs, resolvers });

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: any) => ({ req, res}),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app});
}
startServer();

app.listen({ port: 8000 }, () => {
  console.log('GraphQL server is running on port 8000');
});
