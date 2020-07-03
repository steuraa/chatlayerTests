const { ApolloServer, gql } = require("apollo-server");
var graphql = require("graphql");
var typeDefs = gql`
  type Post {
    message: String
  }
  type Query {
    post(message: String): Post
  }
`;
var resolvers = {
  Query: {
    post: (root, args) => {
      return { message: args.message };
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
