exports.seed = function(knex) {
    
    return (
       
        knex("recipes")
      
            .truncate() 
            .then(function() {
                // Inserts seed entries
                // CHANGE THE TABLE NAME
                return knex("recipes").insert([
                    { name: "cake" },
                    { name: "cookies" },
                    { name: "pizza" }
                ]);
            })
    );
};