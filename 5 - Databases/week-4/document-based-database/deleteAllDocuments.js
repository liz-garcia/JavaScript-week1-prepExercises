// Delete all documents in the database
const deleteAllDocuments = async (client, db_name) => {
  try {
    await client.connect();

    const database = client.db(db_name);
    const collections = await database.listCollections().toArray();

    // Iterate over each collection and delete all documents
    for (const collectionElement of collections) {
      const collectionName = collectionElement.name;
      const collection = database.collection(collectionName);
      await collection.deleteMany({});
    }

    console.log("All documents deleted in all collections.\n");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
};

module.exports = {
  deleteAllDocuments,
};
