import mysql from "mysql2/promise";

export const dbConnectionQuery = async (
  sqlCreateQueries,
  sqlRetrieveQueries
) => {
  try {
    // Make a connection using login credentials
    const connection = await mysql.createConnection({
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
    });

    // Execute sqlCreateQueries
    for (const [index, query] of sqlCreateQueries.entries()) {
      try {
        await connection.query(query);
      } catch (queryErr) {
        console.error(
          `Error executing SQL query ${index + 1}: ${query}.\n\n`,
          queryErr
        );
        throw queryErr;
      }
    }

    // Success Message
    console.log(`All ${sqlCreateQueries.length} Queries Success!\n`);

    // If the argument retrieveQueries is provided:
    if (sqlRetrieveQueries) {
      console.log("\x1b[34m\x1b[1mRetrieving data from database...\x1b[0m");
      try {
        for (const query of sqlRetrieveQueries) {
          const [results] = await connection.query(query);
          console.log(`Results for query: ${query}`);
          console.table(results);
          console.log(`\n`);
        }
      } catch (resultsErr) {
        console.error("Error retrieving results:", resultsErr);
        throw resultsErr;
      }
    }

    // Close the MySQL connection
    await connection.end();
  } catch (err) {
    console.log("Connection error!", err);
    await connection.end();
  }
};
