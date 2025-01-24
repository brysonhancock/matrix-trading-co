const mongoose = require('mongoose');

const connectDB = async () => {
    console.log("Connecting to MongoDB URI:", process.env.MONGO_URI);

    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is undefined. Check your .env file.");
        process.exit(1);
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
