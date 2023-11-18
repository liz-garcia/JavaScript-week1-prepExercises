-- Recipe Table
CREATE TABLE Recipe (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_name TEXT NOT NULL,
    category TEXT NOT NULL
);

-- Ingredient Table
CREATE TABLE Ingredient (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    ingredient_name TEXT NOT NULL
);

-- Instruction Table
CREATE TABLE Step (
    step_id INT AUTO_INCREMENT PRIMARY KEY,
    step_description TEXT NOT NULL
);

-- RecipeIngredient Table
CREATE TABLE RecipeIngredient (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY(ingredient_id) REFERENCES Ingredient(ingredient_id)
);

-- RecipeInstruction Table
CREATE TABLE RecipeInstruction (
    recipe_id INT NOT NULL,
    step_id INT NOT NULL,
    PRIMARY KEY (recipe_id, step_id),
    FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    FOREIGN KEY(step_id) REFERENCES Step(step_id)
);

