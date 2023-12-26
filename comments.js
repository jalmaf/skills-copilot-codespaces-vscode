// Create web server
// create a route for /hello
// send back "Hello World" as the response
// listen on port 3000

// 1. import express
const express = require("express");
// 2. create an instance of express
const app = express();

// 3. create a route for /hello
app.get("/hello", (req, res) => {
  // 4. send back "Hello World" as the response
  res.send("Hello World");
});

// 5. listen on port 3000
app.listen(3000, () => {
  console.log("Listening on port 3000");
});