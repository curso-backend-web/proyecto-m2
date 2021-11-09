INSERT INTO `eshop`.`address`
(
`street`,
`city`,
`state`,
`postalCode`)
VALUES
("21 2nd Street",
"New York",
"NY",
"10021");

INSERT INTO `eshop`.`historial`
(`product_id`,
`date`)
VALUES
(2,
"2021-11-12");

INSERT INTO `eshop`.`cliente`
(`firstName`,
`lastName`,
`dateBirth`,
`address_address_id`,
`historial_historial_id`)
VALUES
("John",
"Smith",
"1973-11-09",
1,
1);

INSERT INTO `eshop`.`address`
(
`street`,
`city`,
`state`,
`postalCode`)
VALUES
("22 3rd Street",
"Houston",
"Texas",
"22021");

INSERT INTO `eshop`.`cliente`
(`firstName`,
`lastName`,
`dateBirth`,
`address_address_id`,
`historial_historial_id`)
VALUES
("Andreu",
"Salicru",
"1987-11-09",
2,
2);

INSERT INTO `eshop`.`category`
(`categoryName`)
VALUES
("Kitchen");

INSERT INTO `eshop`.`review`
(`name`,
`comment`,
`stars`,
`date`)
VALUES
("Shannon",
"This is so warm and comfortable.",
2,
"2011-12-11");

INSERT INTO `eshop`.`product`
(`name`,
`description`,
`price`,
`category_category_id`,
`review_review_id`)
VALUES
("WiredTiger T-shirt",
"Crafted from ultra-soft combed cotton, this essential t-shirt features sporty contrast tipping and MongoDB's signature leaf.",
45,
4,
1);

INSERT INTO `eshop`.`category`
(`categoryName`)
VALUES
("Apparel");





