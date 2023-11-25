import fs from "fs";

// Read the content from SQL files
export function readAndProcessSqlFile(filePath) {
    // Returns an array of strings with SQL statements
  return fs
    .readFileSync(filePath, "utf8")
    .split(";")
    .filter((query) => query.trim() !== "");
};