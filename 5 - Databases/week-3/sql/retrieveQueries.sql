-- Show All tables from the database
SHOW TABLES;
SELECT * FROM Recipe;
SELECT * FROM Category;
SELECT * FROM Step;
SELECT * FROM Ingredient;

-- Show Junction tables
SELECT * FROM RecipeCategory;
SELECT * FROM RecipeIngredient;
SELECT * FROM RecipeStep;

-- Show recipe with corresponding:
-- categories, ingredients and steps in order.
-- Show all details for recipe_id = 2.
SELECT DISTINCT
    r.recipe_name,
    c.category_name
FROM Recipe r
JOIN RecipeCategory rc ON r.recipe_id = rc.recipe_id
JOIN Category c ON rc.category_id = c.category_id
WHERE r.recipe_id = 2;

SELECT DISTINCT
    r.recipe_name,
    i.ingredient_name
FROM Recipe r
JOIN RecipeIngredient ri ON r.recipe_id = ri.recipe_id
JOIN Ingredient i ON ri.ingredient_id = i.ingredient_id
WHERE r.recipe_id = 2;

SELECT DISTINCT
    r.recipe_name,
    rs.step_order,
    s.step_description
FROM Recipe r
JOIN RecipeStep rs ON r.recipe_id = rs.recipe_id
JOIN Step s ON rs.step_id = s.step_id
WHERE r.recipe_id = 2;
