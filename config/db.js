
const mongoose = require('mongoose');

let isConnected;
exports.initDb = async () => {
    if (isConnected) {
      console.log('Using existing database connection');
      return;
    }
    try {
      const db = await mongoose.connect('mongodb://localhost:27017/hts' || process.env.DB_URL, {useNewUrlParser: true
  
      }).then(() => console.log('Database connected!'));
      return;
    } catch (err) {
      throw err;
    }
  };
  