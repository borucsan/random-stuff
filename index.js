const { ApolloServer, gql } = require('apollo-server');
const EULERSERIES_COUNT = 1000;
const NUMBERS_COUNT = 10;

const server = new ApolloServer({
    typeDefs: gql`
        type Query {
            interestingUrls: [String]
            firstName: String
            email: String
            pets: [String]
            randomNumbers: [Int]
            amWorking: Boolean
            pi: Float,
            workDays: [DayOfWeek]
            e: Float
            eulersSeries: [Float]
        }
        enum DayOfWeek {
            MON
            TUE
            WED
            THU
            FRI
            SAT
            SUN
        }
    `,
    rootValue: () => {
        const now = new Date();
        const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return {
            interestingUrls: ["https://smashingmagazine.com", "https://twitter.com/garrows/status/1065217184643768320"],
            firstName: 'John',
            email: 'john@example.com',
            pets: ['Mittens', 'Doggo', 'Birb'],
            randomNumbers: Array.from({length: NUMBERS_COUNT}, () => Math.floor(Math.random() * 10000)),
            amWorking: [2,3].includes(now.getDay()) || now.getHours() < 12,
            pi: Math.PI,
            workDays: DAYS_OF_WEEK.slice(1, 6),
            e: Math.E,
            eulersSeries: Array.from({length: EULERSERIES_COUNT}, (v, k) => k + 1 ).map(n => Math.pow((1 + 1/n), n)) 
        }
    },
    playground: true,
    introspection: true,
});

server.listen({
    port: process.env.PORT || 4567
})
.then((result) => console.log(result.url));