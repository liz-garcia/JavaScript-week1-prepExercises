-- All the Vegetarian recipes with Potatoes
SELECT r.recipe_id, r.recipe_name
FROM Recipe r
JOIN RecipeIngredient ri ON r.recipe_id = ri.recipe_id
JOIN Ingredient i ON ri.ingredient_id = i.ingredient_id
JOIN RecipeCategory rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.category_name = 'Vegetarian' AND i.ingredient_name = 'Potatoes';

-- All the cakes that do not need baking
SELECT r.recipe_id, r.recipe_name
FROM Recipe r
JOIN RecipeCategory rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.category_name IN ('Cake', 'No-Bake')
GROUP BY r.recipe_id, r.recipe_name
HAVING COUNT(DISTINCT c.category_name) = 2;

-- All the vegan and japanese recipes
SELECT r.recipe_id, r.recipe_name
FROM Recipe r
JOIN RecipeCategory rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE c.category_name IN ('Vegan', 'Japanese')
GROUP BY r.recipe_id, r.recipe_name
HAVING COUNT(DISTINCT c.category_name) = 2;



