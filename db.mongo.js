db.cliente.insert(
    {
        "firstName": "John",
        "lastName": "Smith",
        "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        "address": {
         "streetAddress": "21 2nd Street",
         "city": "New York",
         "state": "NY",
         "postalCode": "10021"
        },
        "shoppingCart": []
    }
);

db.cliente.insert(
    {
        "firstName": "Ricard",
        "lastName": "Garcia",
        "dateBirth": "",
        "address": {
         "streetAddress": "",
         "city": "",
         "state":"",
         "postalCode": ""
        },
        "shoppingCart": []
    }
);

mongoimport --db "eshop" --collection "producto" --file "products.json" --jsonArray
