var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: "8889",

    //username
    user: "root",

    //password
    password: "root",
    database: "bamazon"
});

var readDB = function(id, quantity) {
        connection.query(`SELECT stock_quantity FROM products WHERE id = ${id}`, function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res[0].stock_quantity);
          return (res[0].stock_quantity);
        //   connection.end();
        });     
}


var deductQuantity = function(id, q) {
        connection.query(`UPDATE products SET stock_quantity = ${q} WHERE id = ${id}`, 
      function(err, res) {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          return res;
        //   connection.end();
        });      
      }

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
   // prompt for info about the item being put up for auction
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
    console.log("Selecting all products...\n");
    // when finished prompting, insert a new item into the db with that info
    var item = parseInt(answer.item);
    var stock = parseInt(answer.quantity);
    var quantity = readDB(item, stock);
    console.log(quantity);
    if (quantity < 1){
        console.log("Insufficient quantity!");
    }
    else{
        // console.log(quantity);
        // console.log(answer.quantity);

        // var itemQuantity = quantity - answer.quantity;
        // console.log(itemQuantity);
        // // deductQuantity(answer.item, itemQuantity);
        // console.log("ya bought it");
    }
  });
}

// connection.end();