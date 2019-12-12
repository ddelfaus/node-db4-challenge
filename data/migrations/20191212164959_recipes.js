
exports.up = function(knex) {
  return knex.schema

        
  .createTableIfNotExists("recipes", tbl => {
        tbl.increments();
    
        tbl.string("name", 255)
        .notNullable()
        .unique();
    })

    .createTable("ingredients", tbl => {
        tbl.increments();
         
        tbl.string("name", 255)
        .notNullable()
        .unique();
    })
    




    .createTable("recipe_ingredient", tbl => {
        tbl.increments();
         
        tbl.float("amount", 200)
            .notNullable()

        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("ingredients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
    
  
  
    .createTable("instructions", tbl => {
        tbl.increments();
         
        tbl.integer("step_number") 
            .notNullable()

        tbl.string("step", 255)
            .notNullable()
            .unique();

        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

    })

  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('instructions')
};
