const { gql } = require('apollo-server')

module.exports = gql`

type Query {
  Users: [User]
  User(id: Int!): User
  Groups: [Group]
  getAll: [User]
}

type Mutation {
  login(email: String!, password: String!): Session
  loginGoogle(tokenG: String!): Session
  registerPublic(names: String!, lastnames: String!, password: String!, email: String!): User
  addGroup(name: String!): Group
  addBar(name: String!, description: String!, address: String!, userId: Int!): Bar
  addImage(barId: Int!, urlImage: String!): Image
}

type User {
  id: Int
  names: String
  lastnames: String
  email: String
  roles: [Group]
  bars: [Bar]
}

type Permission {
  id: Int
  groupId: Int
  actionId: Int
}

type Group {
  id: Int!
  name: String!
  users: [User]
  permissions: [Permission]
}

type Bar {
  id: Int!
  name: String!
  description: String!
  address: String!
  images: [Image]
}

type Image {
  id: Int!
  barId: Int!
  urlImage: String!
}

enum Gender{
  F
  M
}

type Session {
  status: Boolean
  token: String!
}
`