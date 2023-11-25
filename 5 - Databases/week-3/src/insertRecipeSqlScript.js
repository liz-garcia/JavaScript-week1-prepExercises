// For Recipes array: Functions to generate SQL script for inserting recipes
// Both function return an array of strings, all sql statements

// Given a 'recipes' array, generate a script for each recipe.
export const generateRecipesSqlScripts = (recipes) => {
  const sqlScripts = [];
  // For each recipe, create script and push into 'sqlScripts' array.
  recipes.forEach((recipe) => {
    const sqlRecipeScript = generateSqlScript(recipe);
    sqlScripts.push(...sqlRecipeScript);
  });

  return sqlScripts;
};

// Generate SQL script from 1 recipe
function generateSqlScript(recipe) {
    let sqlScript = [];
    const { name, category, ingredients, steps } = recipe;
  
    const sqlInsertRecipeName = [
      `INSERT INTO Recipe (recipe_name) VALUES ('${name}');`,
      `SET @recipe_id := LAST_INSERT_ID();`,
    ];
    sqlScript.push(...sqlInsertRecipeName);
  
    // For each category, insert Category data
    category.forEach((category) => {
      const sqlInsertCategory = [
        `INSERT INTO Category (category_name) VALUES ('${category}');`,
        `SET @category_id := LAST_INSERT_ID();`,
        `INSERT INTO RecipeCategory (recipe_id, category_id) VALUES (@recipe_id, @category_id);`,
      ];
      sqlScript.push(...sqlInsertCategory);
    });
  
    // For each ingredient, insert Ingredient data
    ingredients.forEach((ingredient) => {
      const sqlInsertIngredient = [
        `INSERT INTO Ingredient (ingredient_name) VALUES ('${ingredient}');`,
        `SET @ingredient_id := LAST_INSERT_ID();`,
        `INSERT INTO RecipeIngredient (recipe_id, ingredient_id) VALUES (@recipe_id, @ingredient_id);`
      ];
      sqlScript.push(...sqlInsertIngredient);
    });
  
    // For each step, insert Step data
    steps.forEach((step, index) => {
      const sqlInsertStep = [
        `INSERT INTO Step (step_description) VALUES ('${step}');`,
        `SET @step_id := LAST_INSERT_ID();`,
        `INSERT INTO RecipeStep (recipe_id, step_id, step_order) VALUES (@recipe_id, @step_id, ${index + 1});`,
      ];
      sqlScript.push(...sqlInsertStep);
    });
  
    return sqlScript;
  }
  