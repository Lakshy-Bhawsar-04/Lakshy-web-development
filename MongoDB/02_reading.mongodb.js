use('e-commerce');

// db.products.find({"name" : "Wireless Mouse"});
// db.products.find({category : "Electronics"});

// db.products.find({price : {$gt:2000}});
db.products.find({price : {$gte : 2000 , $lte : 60000}});