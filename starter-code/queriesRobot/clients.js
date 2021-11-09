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