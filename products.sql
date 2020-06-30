DROP DATABASE IF EXISTS Nabootique;
CREATE DATABASE Nabootique;

USE Nabootique;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
    ("The Mighty Boosh DVD Box Set", "Entertainment", 40, 20),
    ("Vince Noir Zooniverse Jacket", "Mens Apparel", 70, 10),
    ("Howard Moon Trumpet Sock", "Accessories", 10, 50),
    ("Naboo's Miracle Wax 3-pack", "Essentials", 18, 20),
    ("Goth Juice Hairspray 12 oz.", "Essentials", 11, 30),
    ("Cheekbone Magazine: July 2005", "Entertainment", 7, 30),
    ("Bouncy Castle - 1 Night Rental", "Entertainment", 425, 1),
    ("Howard Moon Tweed Utility Suit", "Mens Apparel", 65, 40),
    ("Old Gregg Original Watercolor", "Entertainment", 222, 1),
    ("Jean Cleaude Jaquettie Dryer", "Essentials", 60, 5),
    ("Charlie book set by Vince Noir", "Entertainment", 30, 10),
    ("The Original Egg of Mantumbi", "Artifact", 9999, 1),
    ("Aggressive Nutmeg Elbow Patch", "Accessories", 15, 15)
