const mongoose = require('mongoose');

const recommendationsSchema = new mongoose.Schema({
    id: String,
    name: String,
    image_url: String,
    is_closed: Boolean,
    url: String,
    review_count: Number,
    rating: Number,
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
    },
    phone: String,
    display_phone: String,
    distance: Number
});

const Recommendations = mongoose.model('recommendation', recommendationsSchema);

module.exports = Recommendations;