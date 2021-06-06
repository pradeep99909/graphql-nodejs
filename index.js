const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index.js");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(8085, () => console.log("App is listening on port 8085"));
