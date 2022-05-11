const express = require('express')

const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

// Database connection
const uri =
  'mongodb+srv://Examination:Examinationwork.123@cluster0.yhn1r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('DB is connected')
)

// Server connection
const startServer = async () => {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql' })
  app.listen(4000, () => console.log('Server is running on port 4000'))
}
startServer()
