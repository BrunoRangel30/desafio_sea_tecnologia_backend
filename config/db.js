const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado...');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Saída do processo com falha
  }
};

module.exports = connectDB;
