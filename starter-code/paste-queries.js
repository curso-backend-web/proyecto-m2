// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
INSERT INTO `eshop`.`clientes`
            (`firstname`,
             `lastname`,
             `datebirth`,
             `address:streetaddress`,
             `address:city`,
             `address:state`,
             `address:postalcode`)
VALUES      ( "john",
              "smith",
              "2016-12-10",
              "21 2nd street",
              "new york",
              "ny",
              "10021");

INSERT INTO `eshop`.`clientes`
            (`firstname`,
             `lastname`,
             `datebirth`,
             `address:streetaddress`,
             `address:city`,
             `address:state`,
             `address:postalcode`)
VALUES      ( "dan",
              "dumitrescu",
              "1987-08-17",
              "1 Ovean View",
              "California",
              "CA",
              "95021"); 

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

// Creating categories
INSERT INTO `eshop`.`categories`
            (`name`)
VALUES      ("kitchen"),
			("apparel"),
            ("books");

// Inserts:
INSERT INTO `eshop`.`productos`
            (`name`,
             `description`,
             `category`,
             `price`)
VALUES      ( "water bottle",
"high quality glass bottle provides a healthier way to drink.  silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  eliminates toxic leaching that plastic can cause.  innovative design holds 22-1/2 ounces.  dishwasher safe"
              ,
1,
23.0),
            ("wiredtiger t-shirt",
"crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and mongodb's signature leaf."
             ,
2,
12.0),
            ("sql in easy steps, 4th edition",
"sql in easy steps, 4th edition has an easy-to-follow style that will appeal to anyone who wants to begin using databases. it is suitable for those with little or no experience of sql. this book will appeal to all who need a fundamental understanding of database administration with sql"
             ,
3,
16.9); 
// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

