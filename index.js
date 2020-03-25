const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({
    typeDefs: gql`
        type Query {
            interestingUrls: [String]
            firstName: String
            email: String
            pets: [String]
        }
    `,
    rootValue: {
        interestingUrls: ["https://smashingmagazine.com", "https://twitter.com/garrows/status/1065217184643768320"],
        firstName: 'John',
        email: 'john@example.com',
        pets: ['Mittens', 'Doggo', 'Birb']
    }
});

server.listen({port: 4567}).then((result) => console.log(result.url));