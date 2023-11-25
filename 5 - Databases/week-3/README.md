# Database Normalization Exercise

## Exercise

Last week, an Entity-Relationship Diagram (ERD) was created for a database designed to store `food_recipes`. The goal this week is to explore the normalization process for this database based on the concepts learned.

### Previous Entity-Relationship Diagram (ERD)

![Previous ERD for `food_recipes`](./ERD/initial_food_recipes_ERD.jpg)

## Questions

1. **Was your database already in 2NF / 3NF?**

    - Initially, `food_recipes` database structure closely adhered to the principles of the **1st Normal Form**, with one exception: *Order Irrelevance (for Rows and Columns)*.

    - The `Step` table lacked indications about the *order* of steps: If the rows in the table `Step` were presented in a random order, the table would not convey the recipe instructions correctly.

2. **What changes did you have to do to normalize your database?**

    - To address this issue, a `step_order` column was added into the `RecipeStep` junction table.

    - Now, each composite `primary key (recipe_id, step_id)` is associated with a number indicating the order of steps, resolving the problem effectively.

### Updated Entity-Relationship Diagram (ERD)

![Previous ERD for `food_recipes`](./ERD/updated_food_recipes_ERD.jpg)

#### Database Normalization Checklist

| 1NF                                         | 2NF                        | 3NF                           |
|---------------------------------------------|----------------------------|-------------------------------|
| ✅ Single-valued columns                    | ✅ 1NF                     | ✅ 2NF                        |
| ✅ Column Domain Consistency                | ✅ No Partial Dependencies | ✅ No Transitive Dependencies |
| ✅ Unique Column Names                      |                            |                               |
| ✅ Order Irrelevance (for Rows and Columns) |                            |                               |
| ✅ No Duplicate Records                     |                            |                               |

- Checkmark indicates that the database satisfies the corresponding normalization rule.
- **Regular tables (2NF):**
  - Meet 2NF as there are no partial dependencies.
  - No multivalued dependencies.
- **Junction tables (2NF, 3NF):**
  - Meet 2NF as the composite key is a super key and there are no partial dependencies.
  - Meet 3NF as there are no transitive dependencies.

## Challenges in Scaling

**If you want to add thousands of recipes to your database, what challenges do you foresee?**

- Managing a large volume of data could present challenges with the current database design.
- The insertion process appears intricate, and the retrieval process lacks flexibility.
- Maintaining normalization while handling a increasingly growing dataset would be a complex task. Due to the increasing diversity of fields, possibly more and more tables would need to be created in order to handle this. And there would be more intricate relationships between tables.
- Tracking and ensuring data consistency and integrity within a vast amount of recipes would be challenging within the current rigid structure.
- Updates and deletions would require careful management to avoid placing information in the wrong field and potentially impacting the overall structure.
- Strict rules would need to be implemented, but managing such rules within the context of thousands or millions of records seems very impractical.
