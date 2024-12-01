# Types of Database Indexes

---

### **1. Clustered Index**
A **clustered index** determines the physical storage order of the data in the table. Because the table rows are stored in this order, retrieving a range of values is very efficient.

#### Key Characteristics:
- **One per Table:** You can only have one clustered index since it dictates the physical arrangement of data.
- **Primary Key by Default:** In most RDBMSs, the primary key becomes the clustered index unless specified otherwise.
- **Efficient for Range Queries:** Works best for queries that involve ordered retrieval, such as those using `BETWEEN`, `<`, `>`, or `ORDER BY`.

#### Example:
```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE
);
```
Here, `OrderID` is the clustered index. If you query `WHERE OrderID BETWEEN 100 AND 200`, the database can directly access the range since rows are stored in sorted order.

---

### **2. Non-Clustered Index**
A **non-clustered index** creates a separate structure that contains pointers (row locators) to the actual table rows. The physical order of data remains unaffected.

#### Key Characteristics:
- **Multiple Indexes Allowed:** A table can have several non-clustered indexes.
- **Uses a Lookup Process:** The database uses the non-clustered index to find the data's location, then retrieves it from the table.

#### Example:
```sql
CREATE INDEX idx_customer_id ON Orders (CustomerID);
```
This index is helpful for queries like:
```sql
SELECT * FROM Orders WHERE CustomerID = 123;
```

For this query, the database uses `idx_customer_id` to locate the rows associated with `CustomerID = 123` and then fetches them.

---

### **3. Unique Index**
A **unique index** ensures that the indexed column(s) do not contain duplicate values. It’s often used to enforce uniqueness constraints.

#### Key Characteristics:
- **Similar to Primary Key:** But a table can have multiple unique indexes, while it can have only one primary key.
- **Prevents Duplicates:** It throws an error if an attempt is made to insert duplicate values.

#### Example:
```sql
CREATE UNIQUE INDEX idx_email ON Users (Email);
```
This ensures that no two rows have the same email address.

---

### **4. Composite Index**
A **composite index** (also called a multi-column index) is created on two or more columns. It's useful for queries involving conditions on multiple columns.

#### Key Characteristics:
- **Column Order Matters:** The order of columns in the composite index determines how it’s used.
- **Covers Multiple Queries:** Optimizes queries that filter or sort based on the combined values of the indexed columns.

#### Example:
```sql
CREATE INDEX idx_name_email ON Users (Name, Email);
```
This index is efficient for queries like:
```sql
SELECT * FROM Users WHERE Name = 'Alice' AND Email = 'alice@example.com';
```
It’s less efficient for queries like `WHERE Email = 'alice@example.com'` because the `Name` column is indexed first.

---

### **5. Full-Text Index**
A **full-text index** is used for efficient text searching, particularly when searching for specific words, phrases, or patterns within large text fields.

#### Key Characteristics:
- **Optimized for Text Search:** Finds words in large text fields, such as articles or logs.
- **Supports Advanced Queries:** Allows querying with logical operators, phrases, or partial matches.

#### Example:
```sql
CREATE FULLTEXT INDEX idx_content ON Articles (Content);
```
Query example:
```sql
SELECT * FROM Articles WHERE MATCH(Content) AGAINST ('database optimization');
```
This retrieves articles that mention "database optimization."

---

### **6. Spatial Index**
A **spatial index** is used for geographic or spatial data, like coordinates. It supports queries such as finding points within a certain radius or bounding box.

#### Key Characteristics:
- **Optimized for GIS Data:** Works with spatial data types like `POINT`, `LINESTRING`, and `POLYGON`.
- **Used in Location-Based Queries:** Enables efficient geographic searches.

#### Example:
```sql
CREATE SPATIAL INDEX idx_location ON Locations (Coordinates);
```
This index optimizes queries like:
```sql
SELECT * FROM Locations WHERE ST_Distance(Coordinates, ST_Point(12.34, 56.78)) < 10;
```
---

### **7. Bitmap Index**
A **bitmap index** is used for columns with low cardinality (few unique values). It uses bitmaps (binary vectors) to represent the indexed data.

#### Key Characteristics:
- **Low Cardinality:** Best for columns with values like `Male/Female` or `Yes/No`.
- **Efficient for Analytical Queries:** Often used in data warehouses.

#### Example:
For a `Gender` column:
```plaintext
Row:      1  2  3  4  5
Gender:   M  F  F  M  M

Bitmap for M: 1  0  0  1  1
Bitmap for F: 0  1  1  0  0
```

#### Use Case:
Querying for `Gender = 'M'` is instantaneous because the system directly accesses the bitmap.

---

### **8. Function-Based Index**
A **function-based index** is built on the result of a function or expression applied to a column. It’s useful when queries often involve transformations.

#### Key Characteristics:
- **Precomputes Functions:** Avoids recalculating functions during queries.
- **Efficient for Derived Data:** Indexes derived values instead of storing them separately.

#### Example:
```sql
CREATE INDEX idx_upper_name ON Users (UPPER(Name));
```
Optimizes queries like:
```sql
SELECT * FROM Users WHERE UPPER(Name) = 'ALICE';
```

---

### **9. Covering Index**
A **covering index** includes all the columns required by a query. This avoids accessing the actual table and improves performance.

#### Key Characteristics:
- **Query-Specific:** Tailored to a query's specific needs.
- **Reduces Table Access:** Queries are satisfied entirely by the index.

#### Example:
```sql
CREATE INDEX idx_covering ON Users (Name, Email);
```
For a query:
```sql
SELECT Name, Email FROM Users WHERE Name = 'Alice';
```
The database retrieves results directly from the index, bypassing the table.

---

### Summary of Index Types

| Index Type         | Key Benefit                                | Use Case                                      |
|--------------------|--------------------------------------------|----------------------------------------------|
| **Clustered**      | Orders data physically in the table        | Range queries (`BETWEEN`, `<`, `>`)          |
| **Non-Clustered**  | Separate index structure                  | General-purpose lookups on non-key columns   |
| **Unique**         | Ensures uniqueness                        | Enforce constraints (`Email`, `SSN`)         |
| **Composite**      | Combines multiple columns                 | Multi-column filtering and sorting           |
| **Full-Text**      | Optimized for word/phrase searches         | Articles, blogs, and document repositories   |
| **Spatial**        | Handles geographic data                  | Location-based services, GIS systems         |
| **Bitmap**         | Efficient for low-cardinality columns     | Gender, Boolean flags, categorical data      |
| **Function-Based** | Indexes derived or transformed values      | Case-insensitive searches, derived columns   |
| **Covering**       | Contains all needed query columns         | Query optimization, avoiding table lookups   |

Each index type serves specific scenarios. Choosing the right one depends on query patterns, table size, and cardinality of the data.