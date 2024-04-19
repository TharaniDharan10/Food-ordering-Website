// const express = require('express');
// const Foods = require('./models/FoodModel'); // Assuming this is your Mongoose model
// const { mongoose } = require("./db"); // Import the mongoose object from db.js

// const app = express();
// app.use(express.json());

// const port = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.send("Server working in port no: " + port);
// });

// app.get('/getfoods', (req, res) => {

//     // Foods.find({})
// //     .then(docs=> {
// //         console.log(docs);
// //         res.send(docs)
// //               }).catch(err => {
// //         console.error(err);
// //       });

    
// //     Foods.find({}, (err, docs) => {
// //         if (err) {
// //             console.log(err);
// //             res.status(500).send("Error fetching data from database");
// //         } else {
// //             res.send(docs);
// //         }
// //     });
// // });


// try{
//     const docs =await Foods.find();
//     console.log(docs);
// }catch(err){
//     console.log(err);
// }

// app.listen(port, () => {
//     console.log('Server running on port ' + port);
// });

const express = require('express');
const Foods = require('./models/foodModel'); // Assuming this is your Mongoose model
const { mongoose } = require("./db"); // Import the mongoose object from db.js

const cors =require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const  foodsRoute = require('./routes/foodsRoute')

app.use('/api/foods/' , foodsRoute)

app.get('/', (req, res) => {
    res.send("Server working in port no: " + port);
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log('Server running on port ' + port);
});
