-- create User table
CREATE TABLE "User" (
    UserID SERIAL PRIMARY KEY,
    Username VARCHAR(100),
    Password VARCHAR(100),
    Email VARCHAR(100),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create Product table
CREATE TABLE Product (
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DECIMAL(10, 2),
    StockQuantity INT,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- create Order table
CREATE TABLE "Order" (
    OrderID SERIAL PRIMARY KEY,
    UserID INT REFERENCES "User"(UserID),
    ProductID INT REFERENCES Product(ProductID),
    Quantity INT,
    Status VARCHAR(20),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "User" (Username, Password, Email) VALUES
('Ying', 'yingtu123', 'tu000021@algonquinlive.com')