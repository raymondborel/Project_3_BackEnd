const express = require('express');
const router = express.Router();

const { Restaurants } = require('../models');

router.get('', async (req, res, next) => {
    try {
        res.send("This is Restaurants page");
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;