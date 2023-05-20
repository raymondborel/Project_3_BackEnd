const express = require('express');
const router = express.Router();
const { Restaurants } = require('../models');
const { restaurants } = require('.');

router.get('', async (req, res, next) => {
    try {
        let myRestaurants;
        myRestaurants = await Restaurants.find({});
        console.log(myRestaurants);
        res.json(myRestaurants);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myRestaurant = await Restaurants.findById(req.params.id);
        res.json(myRestaurant)
    } catch (err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try {
        const newRestaurant = req.body;
        await Restaurants.create(req.body);
        console.log(newRestaurant);
        res.redirect('/restaurants');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedRestaurant = await Restaurants.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/restaurants/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedItem = await Restaurants.findByIdAndDelete(req.params.id);
        res.redirect('/restaurants');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;