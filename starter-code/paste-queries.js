// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.clients.insertOne({
    firstName: "Roberto",
lastName: "Garcia",
dateBirth: "1972-08-23",
address: {
 streetAddress: "Sardenya 153",
 city: "Barcelona",
 state: "BCN",
 postalCode: "08013"
}
})
db.getCollection('clients').find({})

// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE

db.products.insertOne({
    name:"Red Wine",
    description:"Spanish red wine from the Navarra county. Strong bouquet. Design for red meats and BBQ",
    category:"Kitchen",
    price:17.5
});
db.getCollection('products').find({})
// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE
db.products.find({name:1})

// PASTE CATEGORY PRODUCTS QUERY HERE
db.products.find({category:1})

// PASTE DELETE PRODUCT QUERY HERE
db.products.deleteOne({_id:1});

// PASTE REVIEW QUERY HERE
db.reviews.find({name:1})
