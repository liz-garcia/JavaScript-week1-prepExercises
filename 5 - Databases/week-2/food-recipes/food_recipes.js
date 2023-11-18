import mysql from "mysql";
import fs from "fs";
import { recipes } from "./recipes.js"; 
import { generateSqlScript } from "./createRecipeScript.js";

// Read the content from SQL files
function readAndProcessSqlFile(filePath) {
    // Returns an array of strings with SQL statements
  return fs
    .readFileSync(filePath, "utf8")
    .split(";")
    .filter((query) => query.trim() !== "");
}

const sqlCreateDatabase = readAndProcessSqlFile("createDatabase.sql");
const sqlCreateTables = readAndProcessSqlFile("createTables.sql");
const sqlRetrieveQueries = readAndProcessSqlFile("retrieveQueries.sql");

// Create array containing all sql queries
const sqlQueries = [...sqlCreateDatabase, ...sqlCreateTables, ...sqlRetrieveQueries];

// For each recipe in the Recipes array, create a script to insert its values into the database. Push the results into the 'sqlQueries' array.
recipes.forEach((recipe) => {
    const sqlInsertRecipeData = generateSqlScript(recipe);
    sqlQueries.push(...sqlInsertRecipeData);
});

// Make a connection using login credentials
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.log("Connection error!", err);
  } else {
    console.log("Connection success!");
  }

  // Execute the SQL queries
  sqlQueries.forEach((sqlQuery, index) => {
    connection.query(sqlQuery, (queryErr, results) => {
      if (queryErr) {
        console.error("Error executing SQL queries:", queryErr);
      } else {
        console.log(`SQL query #${index + 1} executed successfully:`, results);
      }
    });
  });

  // Close the MySQL connection
  connection.end();
});
