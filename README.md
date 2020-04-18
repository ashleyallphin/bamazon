# bamazon
UTA-VIRT-FSF-PT-01-2020-U-LOL Homework #12 (Customer View)

### Node.js & MySQL

## Overview

This application is an Amazon-like storefront. The app takes in orders from customers and depletes stock from the store's inventory.

- - -


### Challenge #1: Customer View (Minimum Requirement)

Running the app logs a welcome message and displays available merchandise.

     ![run-app](media/run-app-see-inventory.gif)


Users may key in the product they wish to purchase.

     ![select-product](media/select-product.gif)


If the product is not recognized, the app will tell the customer that the store does not carry that item.

     ![does-not-carry](media/dont-carry-that.gif)


If the product is available, the app will ask the customer the quantity they'd like to purchase.

     ![select-quantity](media/select-quantity.gif)


If the requested quantity is greater than the available stock, the app will let the customer know that the store does not have enough inventory for their requested amount.

     ![not-enough-stock](media/not-enough-stock.gif)


If the requested quantity is fewer than the available stock, the app will congratulate the customer on their purchase and reduce the inventory by the purchased quantity.

     ![original-inventory](media/inventory.png)
     ![new-inventory](mmedia/new-inventory.png)

The user may leave the store by pressing "Q".

     ![quit](media/quit.giff)

- - -

## Learning Objectives
* Configure a Node.js application to connect to a MySQL instance
* Create and drop databases and tables 
* Explain and execute CRUD methods
* Use both a GUI and the MySQL command prompt to interface with a database
* Create schema and seed files for development and production
* Write join statements to establish relations between data in one or more tables

- - -

## Key Topics
* MySQL Workbench
* MySQL command prompt
* Node.js
* Inquirer