const { MongoClient } = require("mongodb");
const { deleteAllDocuments } = require("./deleteAllDocuments");

require("dotenv").config();

const uri = process.env.MONGODB_URL;
const db_name = process.env.DB_NAME;
const data = require("./data.json");

// Create Document-based database
async function createDocumentBasedDatabase() {
  const client = new MongoClient(uri);
  const database = client.db(db_name);

  try {
    await client.connect();

    // Reset db for exercise purposes
    await deleteAllDocuments(client, db_name);

    await client.connect();

    console.log("Loading documents into the database...");

    // Documents array
    const recipeDocuments = [];

    // For each item in data.json
    for (const dataItem of data) {
      const name = dataItem.name;
      const categories = dataItem.categories;
      const ingredients = dataItem.ingredients;
      const steps = dataItem.steps;

      // Empty arrays to store Ids for the current dataItem
      const categoriesIds = [];
      const ingredientsIds = [];

      // For each category in this data item
      for (const category of categories) {
        // Check if the category already exists
        const existingCategory = await database
          .collection("categories")
          .findOne({ name: category });

        if (!existingCategory) {
          // Create Category Document
          const categoryDocument = { name: category };
          const insertCategory = await database
            .collection("categories")
            .insertOne(categoryDocument);

          // Get the _id of the newly inserted category
          const categoryId = insertCategory.insertedId;
          categoriesIds.push(categoryId);
        } else {
          // If the category already exists, get the _id from the existing category
          const existingCategoryId = existingCategory._id;
          categoriesIds.push(existingCategoryId);
        }
      }

      // For each ingredient in this data item
      for (const ingredient of ingredients) {
        // Check if the ingredient already exists
        const existingIngredient = await database
          .collection("ingredients")
          .findOne({ name: ingredient });

        if (!existingIngredient) {
          // Create Ingredient Document
          const ingredientDocument = { name: ingredient };
          const insertIngredient = await database
            .collection("ingredients")
            .insertOne(ingredientDocument);

          // Get the _id of the newly inserted ingredient
          const ingredientId = insertIngredient.insertedId;
          ingredientsIds.push(ingredientId);
        } else {
          // If the ingredient already exists, get the _id from the existing ingredient
          const existingIngredientId = existingIngredient._id;
          ingredientsIds.push(existingIngredientId);
        }
      }

      // Create Recipe Document
      const recipeDocument = {
        name: name,
        categories: categoriesIds,
        ingredients: ingredientsIds,
        steps: steps,
      };

      recipeDocuments.push(recipeDocument);
    }

    await database.collection("recipes").insertMany(recipeDocuments);
    console.log("All recipes have been inserted to the database.\nSuccessful database creation.\n");

    database.findOne();
  } finally {
    await client.close();
  }
}

createDocumentBasedDatabase().catch(console.error);
