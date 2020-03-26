const { ApolloServer, gql } = require('apollo-server');

const NUMBERS_COUNT = 10;

const server = new ApolloServer({
    typeDefs: gql`
        type Query {
            interestingUrls: [String]
            firstName: String
            email: String
            pets: [String]
            randomNumbers: [Int]
        }
    `,
    rootValue: () => {
        return {
            interestingUrls: ["https://smashingmagazine.com", "https://twitter.com/garrows/status/1065217184643768320"],
            firstName: 'John',
            email: 'john@example.com',
            pets: ['Mittens', 'Doggo', 'Birb'],
            randomNumbers: Array.from({length: NUMBERS_COUNT}, () => Math.floor(Math.random() * 10000))
        }
    },
    playground: true,
    introspection: true,
});

server.listen({
    port: process.env.PORT || 4567
})
.then((result) => console.log(result.url));