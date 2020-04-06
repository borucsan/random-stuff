const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    """
    Interesting url to visit
    """
    interestingUrls: [String]
    """
    Test name
    """
    firstName: String
    """
    Test email
    """
    email: String
    """
    Test array of pets names
    """
    pets: [String]
    """
    Array of random numbers
    """
    randomNumbers: [Int]
    """
    Check if I am working now
    """
    amWorking: Boolean
    """
    PI  number
    """
    pi: Float
    """
    List of work days
    """
    workDays: [DayOfWeek]
    """
    Euler number
    """
    e: Float
    """
    Euler series array 
    """
    eulersSeries: [Float]
    """
    Current time in binary
    """
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
