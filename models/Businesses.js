const mongoose = require("mongoose");

const businessesSchema = new mongoose.Schema({
    id: String,
    alias: String,
    name: String,
    image_url: String,
    is_closed: Boolean,
    url: String,
    review_count: Number,
    categories: [
      {
        alias: String,
        title: String
      }
    ],
    rating: Number,
    coordinates: {
      latitude: Number,
      longitude: Number
    },
    transactions: [
      String
    ],
    price: String,
    location: {
      address1: String,
      address2: {
          type: String,
          default: null
      },
      address3: {
          type: String,
          default: null
      },
      city: String,
      zip_code: String,
      country: String,
      state: String,
      display_address: [
          String,
          String,
          String
      ]
    },
    phone: String,
    display_phone: String,
    distance: Number          
});

const Businesses = mongoose.model("Businesses", businessesSchema);

module.exports = Businesses;