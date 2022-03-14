const express = require('express');
const path = require('path');
const { start } = require('repl');
const db = require('./config/connection');
const routes = require('./routes');
const { authMiddleware } = require('./utils/api');

const app = express();
const PORT = process.env.PORT || 3001;
 //Middleware for the server
// const startServer = async() => {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });

// await server.startServer

server.applyMiddleware({app});

console.log('USe GraphQL at http://localhost:${PORT}${server.graphqlPath}');

startServer();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
