require("dotenv").config();
// const { MONGODB_URI } = process.env;
// const { APIKey } = process.env;
const connectionString = process.env.MONGO_DB_URI;
const APIKey = process.env.APIKey;

const axios = require('axios');

const mongoose = require('mongoose');
mongoose.connect(connectionString);

mongoose.connection
    .on("open", () => console.log("This is my awesome amazing connection"))
    .on("close", () => console.log("Your are disconnected from mongoose :'("))
    .on("error", (error) => console.log(error));

const { Businesses } = require('./models');

const seedingData = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: APIKey
            }
          };
        const myBusinesses = await fetch('https://api.yelp.com/v3/businesses/search?location=San%2520Francisco&sort_by=best_match&limit=20', options)
            .then(response => response.json())
            // .then(response => console.log(response))
            .catch(err => console.error(err));
        console.log(myBusinesses.businesses[0]);
        // const allBusinesses = await myBusinesses.json();
        const deletedBusinesses = await Businesses.deleteMany({});
        const addedBusinesses = await Businesses.insertMany(myBusinesses.businesses);
        console.log(deletedBusinesses);
        console.log(addedBusinesses);
    } catch (err) {
        console.log(err);
    }
}

seedingData();