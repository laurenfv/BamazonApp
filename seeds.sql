DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lipstick", "Cosmetics", 16, 100), ("Jeggings", "Juniors", 20, 30), ("Mug", "Home", 14, 70), ("Mascara", "Cosmetics", 12, 100), ("Mirror", "Home", 60, 10), ("Lamp", "Home", 55, 30),("Sandals", "Clothing", 25, 40), ("iPad", "Electronics", 300, 25), ("Jigsaw", "Tools", 75, 10), ("Plywood", "Lumber", 8, 500);
