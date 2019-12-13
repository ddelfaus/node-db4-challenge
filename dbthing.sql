select recipes.name
    , ingredients.name
    , ri.amount
from recipes
join recipe_ingredient as ri
    on recipes.id = ri.recipe_id
join ingredients 
    on ri.ingredient_id = ingredients.id