use("e-commerce");

// db.sales.insertMany([
//         { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit"},
//         { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit"},
//         { _id: 3, item: "Carrot", price: 12, quantity: 8, category: "Vegetable"},
//         { _id: 4, item: "Tomato", price: 6, quantity: 15, category: "Vegetable"},
//         { _id: 5, item: "Mango", price: 15, quantity: 2, category: "Fruit"}
        
// ])

// db.sales.aggregate([
//     { $match: {
//       category: "Fruit"
//     }},

//     {
//         $project:{
//             _id: 0 , item: 1 ,quantity:1
//         }
//     },
// ]);


db.sales.aggregate({
        
        $group: {
          _id: "$category",
          totalSales: {
            $sum: {$multiply: ["$price" , "$quantity"]}
          }
        }
    }
)