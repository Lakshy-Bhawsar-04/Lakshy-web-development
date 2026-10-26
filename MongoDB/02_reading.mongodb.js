use('e-commerce');

// db.products.find({"name" : "Wireless Mouse"});
// db.products.find({category : "Electronics"});

// db.products.find({price : {$gt:2000}});

// db.products.find({price : {$gte : 2000 , $lte : 60000}});

// db.products.find({$or: [{category:"Electronics"}, {stock: { $lt:50} }]})


// db.products.find({} , {name: 1 , price: 1, _id: 0})

db.products.find().sort({price: -1}).skip(1).limit(2)