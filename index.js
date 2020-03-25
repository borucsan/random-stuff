const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
    typeDefs: `
        type Query {
            greeting: String
        }
    `
});

server.listen({port: 4567}).then((result) => console.log(result.url));