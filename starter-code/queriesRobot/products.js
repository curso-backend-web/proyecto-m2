//db.getCollection('products').find({})
db.products.insertOne({
    name:"Red Wine",
    description:"Spanish red wine from the Navarra county. Strong bouquet. Design for red meats and BBQ",
    category:"Kitchen",
    price:17.5
});
db.getCollection('products').find({})