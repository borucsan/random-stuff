const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    interestingUrls: [String]
    firstName: String
    email: String
    pets: [String]
    randomNumbers: [Int]
    amWorking: Boolean
    pi: Float
    workDays: [DayOfWeek]
    e: Float
    eulersSeries: [Float]
    timeBinary: TimeBinary!
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

  type TimeBinary {
    hour: String!
    minute: String!
    second: String!
  }
`
