import { recipes } from "./src/recipes.js";
import { generateRecipesSqlScripts } from "./src/insertRecipeSqlScript.js";
import { readAndProcessSqlFile } from "./src/processSqlFile.js";
import { dbConnectionQuery } from "./src/dbConnection.js";

// Each variable is an array of strings
// containing the corresponding SQL queries.
const sqlCreateDatabase = readAndProcessSqlFile("./sql/createDatabase.sql");
const sqlCreateTables = readAndProcessSqlFile("./sql/createTables.sql");
const sqlInsertRecipesData = generateRecipesSqlScripts(recipes);

// Array containing all sql queries
// for creating database, creating tables,
// and inserting data.
const sqlCreateQueries = [
  ...sqlCreateDatabase,
  ...sqlCreateTables,
  ...sqlInsertRecipesData,
];

// Array containing all Retrieve Queries 
const sqlRetrieveQueries = readAndProcessSqlFile("./sql/retrieveQueries.sql");

// Connect to the database and execute Queries
const createFoodRecipesDatabase = async () => {
  try {
    console.log("\x1b[34m\x1b[1mCreating database...\x1b[0m");
    await dbConnectionQuery(sqlCreateQueries, sqlRetrieveQueries);

    // Success Message
    console.log(`\x1b[34m\x1b[1mDatabase created successfully.\x1b[0m`);
  } catch (err) {
    console.log("\nOops! Something went wrong.\n\n", err);
  }
};

createFoodRecipesDatabase();
