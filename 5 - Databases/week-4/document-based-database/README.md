# Document-based Database

## What are the collections?

I transformed the original SQL database, 'food_recipes,' into a NoSQL Document-based database with the following collections:

- **recipes**
- **categories**
- **ingredients**

## What information will you embed in a document and which will you store normalized?

I opted for a **normalized** approach, avoiding embedding information in documents. While `categories` and `ingredients` could be small subdocuments, normalizing them into separate collections ensures more efficient management, especially as they are likely to be related to multiple documents.

## What made you decide when to embed information? What assumptions did you make?

Considering the dataset's current size, one might contemplate creating only a `recipes` collection and embedding the `categories` and `ingredients` attributes if the dataset is expected to remain small. However, it's crucial to acknowledge that such an approach could introduce redundancy across multiple recipes, which might not be the most optimal design.

My decision *not to embed* information is based on the understanding that embedding is suitable for small, consistently linked subdocuments within the same parent document. Considering the potential growth of the dataset and the likelihood of **multiple relationships**, a normalized structure with separate collections seemed more scalable and maintainable.

## If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why?

Choosing between MySQL and MongoDB depends on the nature of the data and the requirements. For the recipe database, I selected MongoDB due to its flexibility with schema-less documents, allowing easy representation of recipes with varying structures. MongoDB's document-oriented model aligns well with the hierarchical and diverse nature of recipe data, offering a more intuitive and scalable solution. However I would use it with a normalized approach to organize the data, considering this would be more beneficial for scalability.
