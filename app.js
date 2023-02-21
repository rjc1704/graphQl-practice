const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const commentsModel = require("./comments/comments.model");
const postsModel = require("./posts/posts.model");
const path = require("path");
const app = express();
const port = 4001;

const loadedTypes = loadFilesSync("**/*", {
  extensions: ["graphql"],
});

const loadedResolvers = loadFilesSync(
  path.join(__dirname, "**/*.resolvers.js")
);

const schema = makeExecutableSchema({
  typeDefs: loadedTypes,
  resolvers: loadedResolvers,
});

// const root = {
//   posts: postsModel,
//   comments: commentsModel,
// };

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    // rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("graphQl서버가", port, "에서 열렸습니다.");
});
