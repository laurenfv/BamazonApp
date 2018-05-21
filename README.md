# BamazonApp
> Bamazon is an Amazon-like store front CLI created using Node.js and MySQL

![picture](images/bamazon1.png)
![picture](images/bamazon2.png)

## Technologies Used

- Node.js
- JavaScript
- Inquirer.js NPM Package
- MySQL

## How to Use

To use clone repo and simply run `npm install`

And the run `node bamazonCustomer.js`

## Features

+ Prints the products in the store.
+ Prompts customer which product they would like to purchase by ID number.
+ Asks for the quantity.
+ If there is a sufficient amount of the product in stock, it will return the total for that purchase.
+ However, if there is not enough of the product in stock, it will tell the user that there isn't enough of the product.
+ If the purchase goes through, it updates the stock quantity to reflect the purchase.
+ It will also update the product sales in the department table.
