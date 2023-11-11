-- Recipe Table
CREATE TABLE Recipe (
    recipe_id Integer NOT NULL,
    recipe_name TEXT NOT NULL,
    category TEXT NOT NULL,
    CONSTRAINT recipePk PRIMARY KEY(recipe_id)
);

-- Ingredient Table
CREATE TABLE Ingredient (
    ingredient_id Integer NOT NULL,
    ingredient_name TEXT NOT NULL,
    CONSTRAINT ingredientPk PRIMARY KEY(ingredient_id)
);

-- Instruction Table
CREATE TABLE Instruction (
    instruction_id Integer NOT NULL,
    instruction_description TEXT NOT NULL,
    CONSTRAINT instructionPk PRIMARY KEY(instruction_id)
);

-- RecipeIngredient Table
CREATE TABLE RecipeIngredient (
    recipe_id Integer NOT NULL,
    ingredient_id Integer NOT NULL,
    CONSTRAINT recipeIngredientPk PRIMARY KEY (recipe_id, ingredient_id),
    CONSTRAINT recipeFk FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    CONSTRAINT ingredientFk FOREIGN KEY(ingredient_id) REFERENCES Ingredient(ingredient_id),
);

-- RecipeInstruction Table
CREATE TABLE RecipeInstruction (
    recipe_id Integer NOT NULL,
    instruction_id Integer NOT NULL,
    CONSTRAINT recipeInstructionPk PRIMARY KEY (recipe_id, instruction_id),
    CONSTRAINT recipeFk FOREIGN KEY(recipe_id) REFERENCES Recipe(recipe_id),
    CONSTRAINT instructionFk FOREIGN KEY(instruction_id) REFERENCES Instruction(instruction_id)
);

