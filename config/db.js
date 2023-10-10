const mongoose = require('mongoose');
const connectDb = async () => {
    await mongoose.connect('mongodb+srv://adminRahim:adminRahim@staywise.vpfmvhi.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }) 
    .then(()=> {
        console.log('Connected to Db');
    }).catch((err)=>{
        console.log('MongoDB : ',err.message);
    })
};

// const dbMiddleware = async (req, res, next) => {
//   try {
//     await connectDb();
//     dbConnected = true;  // Set flag to true
//     next();
//   } catch (error) {
//     console.error(error);
//     dbConnected = false;  // Set flag to false
//     res.status(500).send('Internal Server Error');
//   }
// };

module.exports = connectDb;

