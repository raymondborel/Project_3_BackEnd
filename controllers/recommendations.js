const express = require('express');
const router = express.Router();
const { Recommendations } = require('../models');
//const { recommendations } = require('.');

router.get('', async (req, res, next) => {
    try {
        let myRecommendations;
        myRecommendations = await Recommendations.find({});
        console.log(myRecommendations);
        res.json(myRecommendations);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const myRecommendations = await Recommendations.findById(req.params.id);
        res.json(myRecommendations)
    } catch (err) {
        console.log(err);
        next();
    }
})

router.post('', async (req, res, next) => {
    try {
        const newRecommendations = req.body;
        await Recommendations.create(req.body);
        console.log(newRecommendations);
        res.redirect('/recommendations');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updatedRecommendations = await Recommendations.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/recommendations/${req.params.id}`);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedItem = await Recommendations.findByIdAndDelete(req.params.id);
        res.redirect('/recommendations');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;