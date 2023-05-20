const express = require('express');
const router = express.Router();
const { Businesses } = require('../models');

router.get('/', async (req, res) => {
    try {
        let myBusinesses;
        console.log(req.query);
        if (req.query.search) {
            myBusinesses = await Businesses.find({name: req.query.search})
            console.log(myBusinesses);
        } else {
            myBusinesses = await Businesses.find({});
        }
        res.status(200).json(myBusinesses);
    } catch(err) {
        console.log(err);
    }
})

router.post('/', async (req, res) => {
    try {
        res.status(201).json(await Businesses.create(req.body));
    } catch (err) {
        console.log(err);
    }
})
Businesses.findOne
// SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await Businesses.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
      }
});

// UPDATE ROUTE
router.put("/:id", async (req, res) => {
  try {
    // update by ID
    res.json(
      await Businesses.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
  try {
    // delete  by ID
    res.json(await Businesses.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;