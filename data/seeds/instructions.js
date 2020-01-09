exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, step:"combine things", recipe_id: 1},
        {step_number: 5, step:"bake for 40mins ", recipe_id: 1},
        {step_number: 3, step:"combine things with water", recipe_id: 2},
      ]);
    });
};
