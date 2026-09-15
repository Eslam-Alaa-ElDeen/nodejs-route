# MongoDB & NoSQL Notes

## 1. Core Difference: SQL vs NoSQL

### SQL (Relational)

- Data is stored in tables.
- Relationships are represented using foreign keys.
- Structure is fixed (schema first).

**Example:** Users, Orders, Products → multiple joins.

**Best for:** Banking, accounting, structured data, strong consistency.

### NoSQL / MongoDB (Document-Based)

- Data is stored in documents.
- A document is a JSON-like object.
- Related data can be embedded in the same document.
- Structure is flexible.

**Example:** Instead of separate user and order tables, a user document can contain orders.

> **SQL is table-based. MongoDB is document/JSON-like based.**

---

## 2. Why NoSQL Appeared

Common challenges with SQL in modern applications:

1. Many joins can become expensive at scale.
2. Schema changes can be difficult.
3. Frontend applications already work heavily with JSON.

> **Frontend sends JSON → Backend receives JSON → MongoDB stores JSON-like documents naturally.**

---

## 3. Which Is Better?

There is no universally best database. The choice depends on the use case.

| Use Case                         | Better Choice |
| -------------------------------- | ------------- |
| Banking, money, transactions     | SQL           |
| Reporting, analytics             | SQL           |
| Social apps, dashboards          | MongoDB       |
| Fast-changing requirements       | MongoDB       |
| Huge scale / distributed systems | MongoDB       |

### Rule of Thumb

> **Highly relational → SQL**  
> **Hierarchical or JSON-like → MongoDB**

---

## 4. Why MongoDB + Node.js Works Naturally

1. Node.js works with JavaScript objects.
2. MongoDB stores JSON-like documents.
3. Less object-to-table mapping is needed compared with SQL/ORM-based applications.

---

# MongoDB

## Database Commands

```javascript
show dbs
```

See all databases.

```javascript
use movieDB
```

Switch to a database. The database is created implicitly when data is stored.

```javascript
db;
```

Check the current database.

```javascript
db.dropDatabase();
```

Drop the current database.

---

# Collection Commands

```javascript
show collections
```

Show all collections in the current database.

```javascript
db.getCollectionNames();
```

Get all collection names.

```javascript
db.reviews.drop();
```

Drop a collection.

## Implicit Collection Creation

A collection is created automatically when inserting the first document:

```javascript
db.movies.insertOne({ title: "Inception", year: 2010, rating: 8.8 });
```

## Explicit Collection Creation

```javascript
db.createCollection("reviews");
```

## Create a Collection with Options

```javascript
db.createCollection("actors", {
  validator: { $and: [{ name: { $type: "string" } }, { name: { $ne: " " } }] },
});
```

## Create a Collection with bson Schema

```javascript
export const userSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "email", "password", "phone"],
    properties: {
      name: { bsonType: "string", minLength: 2 },
      email: { bsonType: "string" },
      password: { bsonType: "string" },
      phone: { bsonType: "string" },
    },
  },
};
```

```javascript
db.createCollection("users", userSchema);
```

---

# Capped Collections

## Create a Capped Collection

```javascript
db.createCollection("viewingHistory", {
  capped: true,
  size: 10485760, // 10MB
  max: 5000, // Maximum 5000 documents
});
```

## Check if a Collection Is Capped

```javascript
db.viewingHistory.isCapped();
```

## Convert a Collection to Capped

```javascript
db.runCommand({ convertToCapped: "blogs", size: 5000, max: 5 });
```

## What Is a Capped Collection?

A collection with a fixed size that automatically removes the oldest documents when full.

**Perfect for:** Logs, cache, session data.

### Advantages

- Very fast inserts.
- Automatic removal of old data (FIFO).
- Keeps only recent data.

### Limitations

- Cannot delete individual documents.
- Cannot update a document if the update increases its size.

---

# CRUD Operations

## INSERT

### Insert One Document

```javascript
db.movies.insertOne({ doc }, { options });
```

Example:

```javascript
db.movies.insertOne({
  title: "The Dark Knight",
  year: 2008,
  rating: 9.0,
  genres: ["Action", "Crime", "Drama"],
});
```

### Insert Multiple Documents

```javascript
db.movies.insertMany([docs], { options });
```

Example:

```javascript
db.movies.insertMany([
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    runtime: 152,
    budget: 185000000,
    boxOffice: 1004558444,
  },
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Christopher Nolan",
    runtime: 148,
    budget: 160000000,
    boxOffice: 829895144,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    runtime: 154,
    budget: 8000000,
    boxOffice: 213928762,
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genres: ["Action", "Sci-Fi"],
    director: "Wachowski Sisters",
    runtime: 136,
    budget: 63000000,
    boxOffice: 463517383,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    runtime: 142,
    budget: 55000000,
    boxOffice: 678226465,
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    director: "Christopher Nolan",
    runtime: 169,
    budget: 165000000,
    boxOffice: 677471339,
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genres: ["Drama"],
    director: "Frank Darabont",
    runtime: 142,
    budget: 25000000,
    boxOffice: 28341469,
  },
]);
```

### `ordered`

`ordered: true` is the default and stops on the first error.

```javascript
db.movies.insertMany([...], {
  ordered: true
})
```

---

# READ / FIND

```javascript
db.movies.find({ filter }, { projection });
```

Find documents.

```javascript
db.movies.findOne({ filter }, { projection });
```

Find one document.

### Example

```javascript
db.movies.findOne({ title: "Inception" });
```

---

# Query Operators

## 1. Comparison Operators

### `$gte` / `$lte`

Movies from 2000 or later:

```javascript
db.movies.find({ year: { $gte: 2000 } });
```

### `$gt` / `$lt`

High-rated movies:

```javascript
db.movies.find({ rating: { $gt: 8.5 } });
```

### `$ne` / `$eq`

Movies NOT from 1994:

```javascript
db.movies.find({ year: { $ne: 1994 } });
```

### `$in` / `$nin`

Movies from specific years:

```javascript
db.movies.find({ year: { $in: [1994, 1999, 2008] } });
```

---

## 2. Logical Operators

### `$and`

Movies from 2000+ with rating > 8.5:

```javascript
db.movies.find({ $and: [{ year: { $gte: 2000 } }, { rating: { $gt: 8.5 } }] });
```

### Shorthand AND

```javascript
db.movies.find({ year: { $gte: 2000 }, rating: { $gt: 8.5 } });
```

### `$or`

```javascript
db.movies.find({ $or: [{ year: { $gte: 2000 } }, { rating: { $gt: 8.5 } }] });
```

### `$not`

Year is NOT greater than 2010:

```javascript
db.movies.find({ year: { $not: { $gt: 2010 } } });
```

### `$nor`

Neither condition is true:

```javascript
db.movies.find({ $nor: [{ year: 1994 }, { rating: { $lt: 8.0 } }] });
```

### Complex Logical Query

**(Year >= 2000 AND rating > 8.5) OR (Year = 1994)**

```javascript
db.movies.find({
  $or: [
    { $and: [{ year: { $gte: 2000 } }, { rating: { $gt: 8.5 } }] },
    { year: 1994 },
  ],
});
```

---

## 3. Element Operators

### `$exists`

Movies that have a `year` field:

```javascript
db.movies.find({ year: { $exists: true } });
```

Movies without a `director` field:

```javascript
db.movies.find({ director: { $exists: false } });
```

### `$type`

Check that `year` is a number:

```javascript
db.movies.find({ year: { $type: "number" } });
```

```javascript
db.movies.find({ year: { $type: 16 } });
```

`16` = 32-bit integer.

---

## 4. Array Operators

### Match an Array Element

```javascript
db.movies.find({ genres: "Drama" });
```

### `$all`

Movies containing all specified genres:

```javascript
db.movies.find({ genres: { $all: ["Action", "Crime"] } });
```

### `$size`

Arrays with exactly 3 elements:

```javascript
db.movies.find({ genres: { $size: 3 } });
```

### `$elemMatch`

At least one element in `genres` matches `"Action"` and rating is high enough:

```javascript
db.movies.find({
  genres: { $elemMatch: { $eq: "Action" } },
  rating: { $gte: 8.8 },
});
```

---

# Sorting, Limiting & Skipping

## Sort

```javascript
db.movies.find().sort({ year: 1 });
```

- `1` = ascending
- `-1` = descending

### Multiple Sort Criteria

```javascript
db.movies.find().sort({ year: -1, rating: -1 });
```

## Limit

Top 3 highest-rated movies:

```javascript
db.movies.find().sort({ rating: -1 }).limit(3);
```

## Skip + Limit

Skip the first 5 and show the next 5:

```javascript
db.movies.find().sort({ year: -1 }).skip(5).limit(5);
```

## Count Documents

```javascript
db.movies.countDocuments();
```

## Combined Example

Find movies with rating >= 8.5, show only `title` and `year`, skip 1, limit 2, and sort by year descending then rating descending:

```javascript
db.movies
  .find({ rating: { $gte: 8.5 } }, { title: 1, year: 1, _id: 0 })
  .skip(1)
  .limit(2)
  .sort({ year: -1, rating: -1 });
```

---

# MongoDB Data Types

| Type       | Alias | Description           |
| ---------- | ----: | --------------------- |
| `double`   |     1 | 64-bit floating point |
| `string`   |     2 | String                |
| `object`   |     3 | Embedded document     |
| `array`    |     4 | Array                 |
| `binary`   |     5 | Binary data           |
| `objectId` |     7 | ObjectId              |
| `bool`     |     8 | Boolean               |
| `date`     |     9 | Date                  |
| `null`     |    10 | Null                  |
| `int`      |    16 | 32-bit integer        |
| `long`     |    18 | 64-bit integer        |

---

# UPDATE

## `updateOne`

Update a single document:

```javascript
db.movies.updateOne({ filter }, { update });
```

Example:

```javascript
db.movies.updateOne({ title: "Inception" }, { $set: { rating: 9.0 } });
```

## `updateMany`

Update multiple documents:

```javascript
db.movies.updateMany({ filter }, { update });
```

---

# Update Operators

## `$set`

Set a field value:

```javascript
db.movies.updateOne(
  { title: "Inception" },
  { $set: { rating: 9.0, lastUpdated: new Date() } },
);
```

## `$unset`

Remove a field:

```javascript
db.movies.updateOne({ title: "Inception" }, { $unset: { lastUpdated: "" } });
```

## `$push`

Add an element to an array:

```javascript
db.movies.updateOne({ title: "Inception" }, { $push: { genres: "Thriller" } });
```

## `$addToSet`

Add an element only if it does not already exist:

```javascript
db.movies.updateOne(
  { title: "Inception" },
  { $addToSet: { genres: "Sci-Fi" } },
);
```

## `$pull`

Remove all matching elements:

```javascript
db.movies.updateOne({ title: "Inception" }, { $pull: { genres: "Thriller" } });
```

---

# DELETE

## `deleteOne`

```javascript
db.movies.deleteOne({ title: "Interstellar" });
```

## `deleteMany`

```javascript
db.movies.deleteMany({ year: { $in: [2015, 2016, 2017] } });
```

> `deleteMany({})` with an empty filter deletes **all documents**.

---

# Indexes

## Why Indexes?

Indexes help MongoDB find documents efficiently instead of scanning every document.

## Create an Index

```javascript
db.movies.createIndex({ year: 1 });
```

- `1` = ascending
- `-1` = descending

## Check Query Execution

```javascript
db.movies.find({ year: 2020 }).explain("executionStats");
```

## Get Indexes

```javascript
db.movies.getIndexes();
```

## Drop an Index by Name

```javascript
db.movies.dropIndex("year_1");
```

## Drop an Index by Specification

```javascript
db.movies.dropIndex({ year: 1 });
```

## Drop All Indexes Except `_id`

```javascript
db.movies.dropIndexes();
```

## Collection Statistics

```javascript
db.movies.stats();
```

---

# Aggregation Pipeline

Aggregation processes documents **stage by stage** to transform them into new results.

```text
Documents
   ↓
Stage 1
   ↓
Stage 2
   ↓
Stage 3
   ↓
Result
```

Each stage receives the output of the previous stage.

## Basic Structure

```javascript
db.movies.aggregate([{ stage1 }, { stage2 }, { stage3 }]);
```

## Common Aggregation Stages

- `$match`
- `$project`
- `$sort`
- `$group`
- `$unwind`
- `$lookup`

---

# `$match` — Filtering

```javascript
db.movies.aggregate([
  { $match: { year: { $gte: 2000 }, rating: { $exists: true } } },
]);
```

---

# `$project` — Shaping & Transforming

Controls which fields to show, rename fields, and create calculated fields.

```javascript
{
  $project: {
    title: 1,
    year: 1,
    rating: 1,
    directedBy: "$director",
    profit: {
      $subtract: [
        "$boxOffice",
        "$budget"
      ]
    },
    _id: 0
  }
}
```

> `$` means "get the value from this field."

After renaming `director` to `directedBy`, later stages must use `directedBy`.

---

# `$sort`

```javascript
{
  $sort: {
    profit: -1;
  }
}
```

---

# `$group`

`$group` takes many documents and combines them into fewer documents based on a grouping rule.

Useful questions:

- How many movies per director?
- What is the average profit per director?

```javascript
{
  $group: {
    _id: "$directedBy",
    movieCount: { $sum: 1 },
    avgProfit: { $avg: "$profit" }
  }
}
```

- `$sum: 1` → counts documents.
- `$avg` → calculates the average.

---

# `$unwind`

`$unwind` takes an array field and turns each element into a separate document.

## Example: Movies per Genre

```javascript
db.movies.aggregate([
  { $unwind: "$genres" },
  { $group: { _id: "$genres", movieCount: { $sum: 1 } } },
  { $sort: { movieCount: -1 } },
]);
```

---

# `$lookup`

`$lookup` joins documents from another collection based on matching fields.

Think of it as MongoDB's version of an SQL `JOIN`.

It **does not merge collections**. Instead, it adds an array containing the matched documents.

```javascript
{
  $lookup: {
    from: "reviews",
    localField: "_id",
    foreignField: "movieId",
    as: "movieReviews"
  }
}
```

---

# Aggregation Practice

## 1. Movie Title + Reviews Only

Display movie title and reviewer's name/rating:

```javascript
db.movies.aggregate([
  {
    $lookup: {
      from: "reviews",
      localField: "_id",
      foreignField: "movieId",
      as: "reviews",
    },
  },
  {
    $project: { title: 1, "reviews.reviewer": 1, "reviews.rating": 1, _id: 0 },
  },
]);
```

## 2. Reviews with Rating >= 9

Display:

- Reviewer
- Rating
- Review date

Sort from highest rating to lowest.

```javascript
db.reviews.aggregate([
  { $match: { rating: { $gte: 9 } } },
  { $project: { reviewer: 1, rating: 1, date: 1, _id: 0 } },
  { $sort: { rating: -1 } },
]);
```

---

# Review Data for `$lookup`

```javascript
db.reviews.insertMany([
  {
    movieId: ObjectId("000000000000000000000001"),
    reviewer: "John Smith",
    rating: 10,
    comment: "Absolutely phenomenal! Heath Ledger's Joker is legendary.",
    date: new Date("2024-01-15"),
  },
  {
    movieId: ObjectId("000000000000000000000001"),
    reviewer: "Jane Doe",
    rating: 9,
    comment: "Best superhero movie ever made!",
    date: new Date("2024-01-20"),
  },
  {
    movieId: ObjectId("000000000000000000000002"),
    reviewer: "Mike Wilson",
    rating: 10,
    comment: "Mind-bending masterpiece. Nolan's best work!",
    date: new Date("2024-02-01"),
  },
  {
    movieId: ObjectId("000000000000000000000002"),
    reviewer: "Sarah Johnson",
    rating: 8,
    comment: "Great movie but a bit confusing.",
    date: new Date("2024-02-05"),
  },
  {
    movieId: ObjectId("000000000000000000000003"),
    reviewer: "Chris Brown",
    rating: 9,
    comment: "Tarantino at his finest!",
    date: new Date("2024-01-10"),
  },
  {
    movieId: ObjectId("000000000000000000000005"),
    reviewer: "Emily Davis",
    rating: 10,
    comment: "Emotional rollercoaster. Tom Hanks is incredible!",
    date: new Date("2024-01-25"),
  },
  {
    movieId: ObjectId("000000000000000000000007"),
    reviewer: "David Miller",
    rating: 10,
    comment: "The greatest movie of all time. Period.",
    date: new Date("2024-02-10"),
  },
  {
    movieId: ObjectId("000000000000000000000007"),
    reviewer: "Lisa Anderson",
    rating: 10,
    comment: "Perfection in every frame.",
    date: new Date("2024-02-12"),
  },
]);
```

---

# CRUD Quick Reference

| Operation            | Structure                                               |
| -------------------- | ------------------------------------------------------- |
| **find**             | `find({ filter }, { projection })`                      |
| **findOne**          | `findOne({ filter }, { projection })`                   |
| **insertOne**        | `insertOne({ doc }, { options })`                       |
| **insertMany**       | `insertMany([docs], { options })`                       |
| **updateOne**        | `updateOne({ filter }, { update }, { options })`        |
| **updateMany**       | `updateMany({ filter }, { update }, { options })`       |
| **replaceOne**       | `replaceOne({ filter }, { doc }, { options })`          |
| **deleteOne**        | `deleteOne({ filter }, { options })`                    |
| **deleteMany**       | `deleteMany({ filter }, { options })`                   |
| **findOneAndUpdate** | `findOneAndUpdate({ filter }, { update }, { options })` |
| **findOneAndDelete** | `findOneAndDelete({ filter }, { options })`             |

## Rule of Thumb

1. **1st `{}`** → Which documents? → **Filter**
2. **2nd `{}`** → What to change/show? → **Update / Projection**
3. **3rd `{}`** → How should MongoDB behave? → **Options**

```

```
