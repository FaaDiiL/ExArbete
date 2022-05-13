const { gql } = require('apollo-server-express')
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Qualification" type defines the queryable fields for every qualification in our data source.
  """
   A type that describes the user
  """
  type Qualification {
    "Get all qualifications"
    id: ID!
    name: String!
    area: String
    type: String
    access: String
    description: String!
    eqf: Int!
    language: Language!
    date_added: String
    date_updated: String
  }

  # The "SubQualification" type defines the queryable fields for every sub qualification in our data source.
  type SubQualification {
    id: ID!
    name: String!
    description: String!
    data_added: String!
    data_updated: String
    qualification_id: ID!
  }
  
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "qualifications" query returns an array of zero or more Qualifications (defined above).
  type Query {
    getQualifications: [Qualification!]!
    getQualificationById(id: ID!): Qualification
    getSubQualifications(id:ID!): [SubQualification!]
    getSubQualificationById(id: ID!): SubQualification
  }

  
  type Mutation {
# __________ Qualifications __________

    createQualification(qualification: AddQualificationInput): Qualification

    updateQualification(
      id: ID!,
      qualification: UpdateQualificationInput
    ): Qualification

    deleteQualificationById( id: ID! ): Qualification

# __________ SubQualifications __________
    createSubQualification(id:ID!, subQualification: AddSubQualificationInput): SubQualification

    updateSubQualification(
      id: ID!,
      subQualification: UpdateSubQualificationInput
    ): SubQualification

    deleteSubQualificationById( id: ID! ): SubQualification

  }

  input AddQualificationInput {
    name: String!
    area: String
    type: String
    access: String
    description: String!
    eqf: Int!
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
    eqf: Int
    language: Language
    date_added: String
    date_updated: String
  }

  input AddSubQualificationInput {
    name: String!
    description: String!
    data_added: String!
    data_updated: String
    qualification_id: ID!
  }
  input UpdateSubQualificationInput {
    name: String
    description: String
    data_added: String
    data_updated: String
    qualification: ID
  }

  enum Language {
    ENGLISH
    SWEDISH
  }

`
module.exports = { typeDefs }
