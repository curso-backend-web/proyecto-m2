db.reviews.insertOne({
      name: "Robert",
      comment: "This is so stressful.",
      stars: 5.0,
      date: "2021-11-9"
})

db.getCollection('reviews').find({})