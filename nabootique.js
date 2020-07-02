// require dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require('colors-cli');
require('colors-cli/safe');
require('colors-cli/toxic');
require('dotenv').config();

// store connect method in var 'connection
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: process.env.DB_PASS,
    database:"Nabootique"
})
// use the connect method to connect to the mySQL database
connection.connect(function(err) {
    if (err) throw err;
    console.log
    (`\nSuccesfully connected to the database.`.x204
    + `\n\n` +
    `\n\nWELCOME TO THE NABOOTIQUE\u00AE\n`.x202.bold
    + `Browse our inventory below.\n`.x226
    );
    renderProducts();
})

var renderProducts = function(){
    connection.query("SELECT * FROM products", function(err, res){
        console.log(`ID\tProduct\t\t\t\t\tDepartment\t\tPrice\t\tQty.`.x245.underline);
        for(var i=0; i<res.length; i++){
            console.log
            ((res[i].item_id+"\t").x240
            +(res[i].product_name+"\t\t"
            +res[i].department_name+"\t\t\u00A3 "
            +res[i].price+"\t\t"
            +res[i].stock_quantity).x255);
        }
    promptCustomer(res);
    })
}

var promptCustomer = function(res){
    inquirer.prompt([{
        type: "input",
        name: "choice",
        prefix: "",
        message: `\n\⮑`.x226 + `  What would you like to purchase? `.x255 + `Press Q to leave the store.`.italic.x248
    }]).then(function(answer){
        var correct = false;
        if(answer.choice.toUpperCase()=="Q"){
            process.on('exit', function(code) {
                return console.log(`\nThank you for shopping at the Nabootique! Please come again.\n`.x202.bold);
            });
            process.exit();
        }
        for (var i=0; i<res.length; i++){
            if(res[i].product_name==answer.choice){
                correct=true;
                var product=answer.choice;
                var id=i;
                inquirer.prompt({
                    type: "input",
                    name: "quantity",
                    prefix: "",
                    message: `\n\⮑`.x226 + `  How many would you like to purchase?`,
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        } else {
                            return false;
                        }
                    }

                }).then(function(answer){
                    if((res[id].stock_quantity-answer.quantity)>0){
                        connection.query("UPDATE products SET stock_quantity='"+(res[id].stock_quantity-answer.quantity)+" ' WHERE product_name='"+product+"'", function(err,res2){
                            console.log(`\n\⮑`.x34 + `  Alright! Congratulations on your purchase!\n`.x34);
                            renderProducts();
                        })
                    } else {
                        console.log(`\n\⮑`.x160 + `  Sorry. We do not have enough in stock to fulfill your reqeust.`.x160);
                        promptCustomer(res);
                    }
                })
            }
        }
    if(i==res.length && correct==false){
        console.log(`\n\⮑`.x160 + `  Sorry. We do not carry that item.`.x160);
        promptCustomer(res);
    }
    })
}

