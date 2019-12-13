const express = require('express');

const Recipe = require('./recipe-model');

const router = express.Router();


router.get('/', (req, res) => {
    Recipe.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });


module.exports = router;