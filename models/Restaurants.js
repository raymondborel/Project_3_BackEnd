const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Restaurants = mongoose.model('restaurant', restaurantsSchema);

module.exports = Restaurants;