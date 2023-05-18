// Import Dependencies
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require("express");
const cors = require("cors");
const restaurantsController = require('./controllers/restaurants');


// Create our app object
const app = express();

// set up middleware
app.use(cors());
// I need to parse incoming requests (which tend to be strings) and make it so those requests are in JSON
app.use(express.json());

//home route for testing our app
app.get("/", (req, res) => {
  res.json({comment: "Welcome to the Home Page"});
});

app.use('/restaurants', restaurantsController);

app.get('/*', (req, res) => {
    res.json({comment: "This is a bad URL"});
})

// turn on the server listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});