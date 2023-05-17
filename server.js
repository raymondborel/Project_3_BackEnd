// Import Dependencies
const express = require("express");
const cors = require("cors");

// Create our app object
const app = express();

// set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/restaurants", (req, res) => {
  // send projects via JSON
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));