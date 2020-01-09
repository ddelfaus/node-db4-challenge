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




  router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params

    Recipe.getShoppingList(id)
    
    .then(recipe => {
        if (recipe) {
            res.json(recipe);
        }else{
            res.status(404).json({ message: 'Could not find recipe with given id.' })
        }
     
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });


  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params

    Recipe.getInstructions(id)
    
    .then(recipe => {
        if (recipe) {
            res.json(recipe);
        }else{
            res.status(404).json({ message: 'Could not find recipe with given id.' })
        }
     
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

module.exports = router;