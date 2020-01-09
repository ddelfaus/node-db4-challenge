const db = require('../data/dp-config')


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}



function getRecipes() {
    return db('recipes')
    
}

function getShoppingList(recipe_id) {
   
    return db('recipes')
    .select('recipes.name', 'ingredients.name', 'ri.amount')
    .join('recipe_ingredient as ri', 'recipes.id', 'ri.recipe_id')
    .join('ingredients', 'ri.ingredient_id', 'ingredients.id')
    .where({ recipe_id: recipe_id})
}

function getInstructions(recipe_id) {
   
    return db('recipes')
    .select( 'i.step_number', 'i.step')
    .join('instructions as i', 'recipes.id', 'i.recipe_id')
    
    .where({ recipe_id: recipe_id})
}