var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: "8889",

    //username
    user: "root",

    //password
    password: "root",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

//creates a table to display db
var displayDB = function() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log(`\n`);
        console.table(res);
        console.log(`\n`);
    });
}

//handles user exit
var exit = function() {
    console.log(`\nBye!`);
    connection.end();
}

//handles user confirm
var start = function() {
    console.log('\n  ');
    displayDB();
    inquirer.prompt({
        type: "confirm",
        message: "Do you wanna buy something from the items below? \n ",
        name: "confirm",
        default: true
    }).then(function(answer) {
        if (answer.confirm === true) {
            buy();
        } else {
            exit();
        }
    });
}

// function which prompts the user for what they want to buy and deducts how much from DB
var buy =  function() {
   inquirer
   .prompt([
     {
       name: "item",
       type: "input",
       message: "What is the id of the item you would like to buy?"
     },
     {
       name: "quantity",
       type: "input",
       message: "How many of those items do you want to buy?"
     }
   ])
   .then(function(answer) {
        console.log("\nSelecting all products...\n");
        var item = parseInt(answer.item);
        var stock = parseInt(answer.quantity);
        
        connection.query(`SELECT stock_quantity, price FROM products WHERE id = ${item}`, function(err, res) {
            if (err) throw err;
            if (res[0].stock_quantity < 1){
                console.log("Insufficient quantity!");
                start();
            }
            else {
                var quantity = res[0].stock_quantity - answer.quantity;
                var total = res[0].price * stock;
                connection.query(`UPDATE products SET stock_quantity = ${quantity} WHERE id = ${item}`, 
            function(err, res) {
                    if (err) throw err;
                    console.log(`Success, your total cost was $${total}.`);
                    start();
                });
            }
        });
    });
}