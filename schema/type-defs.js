const { gql } = require('apollo-server-express')
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Qualification" type defines the queryable fields for every qualification in our data source.
  type Qualification {
    id: ID!
    name: String!
    area: String
    type: String
    access: String
    description: String!
    eqf: Eqf!
    language: Language!
    date_added: String!
    date_updated: String
    # subQualifications(id: [ID!]): [SubQualification!]!
  }

  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "qualifications" query returns an array of zero or more Qualifications (defined above).
  type Query {
    getQualifications: [Qualification!]!
    getQualificationById(id: ID!): Qualification
  }

  
  type Mutation {
    createQualification(qualification: AddQualificationInput): Qualification

    updateQualification(
      id: ID!,
      qualification: UpdateQualificationInput
    ): Qualification

    deleteQualificationById( id: ID! ): Qualification
  }

  input AddQualificationInput {
    name: String!
    area: String
    type: String
    access: String
    description: String!
    eqf: Eqf!
    language: Language!
    date_added: String
    date_updated: String
  }
  input UpdateQualificationInput {
    name: String
    area: String
    type: String
    access: String
    description: String
    eqf: Eqf
    language: Language
    date_added: String
    date_updated: String
  }

  enum Language {
    ENGLISH
    SWEDISH
  }
  enum Eqf {
    _0
    _1
    _2
    _3
    _4
    _5
    _6
    _7
    _8
  }
`
module.exports = { typeDefs }
