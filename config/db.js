
const mongoose = require('mongoose');

let isConnected;
exports.initDb = async () => {
    if (isConnected) {
      console.log('Using existing database connection');
      return;
    }
    try {
      const db = await mongoose.connect('mongodb+srv://AjitBankar:LMQG6a9dzZPvLyb7@cluster0.ikui9vf.mongodb.net/hts_test?retryWrites=true&w=majority' || process.env.DB_URL, {useNewUrlParser: true
  
      }).then(() => console.log('Database connected!'));
      return;
    } catch (err) {
      throw err;
    }
  };
  
