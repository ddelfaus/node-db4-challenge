const db = require('../data/dp-config')


module.exports = {
    getRecipes
}



function getRecipes() {
    return db('recipes')
}