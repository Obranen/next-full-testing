import gql from 'graphql-tag'

export const typeDefs = gql `
  #Query
  type Query {
    getReview: [Review]
  }
  
  type Review {
    id: ID,
    nameReview: String,
    descReview: String
  }
  
  #Mutation
  type Mutation {
    addReview(nameReview: String, descReview: String): Review
    removeReview(id: ID): ID
    editReview(id: ID, nameReview: String, descReview: String): Review
  }
`