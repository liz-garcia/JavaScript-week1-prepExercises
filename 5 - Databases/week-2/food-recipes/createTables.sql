-- Recipe Table
CREATE TABLE IF NOT EXISTS Recipe (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_name VARCHAR(70) NOT NULL
);

-- Category Table
CREATE TABLE IF NOT EXISTS Category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);

-- Ingredient Table
CREATE TABLE IF NOT EXISTS Ingredient (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_name VARCHAR(30) NOT NULL
);

-- Step Table
CREATE TABLE IF NOT EXISTS Step (
    step_id INT AUTO_INCREMENT PRIMARY KEY,
    step_description TEXT NOT NULL
);

-- RecipeIngredient Table
CREATE TABLE IF NOT EXISTS RecipeIngredient (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY(ingredient_id) REFERENCES Ingredient(ingredient_id)
);

-- RecipeStep Table
CREATE TABLE IF NOT EXISTS RecipeStep (
    recipe_id INT NOT NULL,
    step_id INT NOT NULL,
    PRIMARY KEY (recipe_id, step_id),
    FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY(step_id) REFERENCES Step(step_id)
);

-- RecipeCategory Table
CREATE TABLE IF NOT EXISTS RecipeCategory (
    recipe_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (recipe_id, category_id),
    FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY(category_id) REFERENCES Category(category_id)
);

