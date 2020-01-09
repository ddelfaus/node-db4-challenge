
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        {recipe_id: 1, ingredient_id: 1, amount: 3},
        {recipe_id: 1, ingredient_id: 2, amount: 5},
        {recipe_id: 2, ingredient_id: 2, amount: 2},
        {recipe_id: 3, ingredient_id: 3, amount: 10}
      ]);
    });
};
