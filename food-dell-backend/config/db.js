
// export {connectToMongo};

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToMongo = async () => {
    const mongo_url = process.env.MONGO_URL;

    if (!mongo_url) {
        console.error("MongoDB connection URL is missing in environment variables.");
        return;
    }

    try {
        await mongoose.connect(mongo_url);
        console.log('✅ MongoDB connected successfully');
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if DB connection fails
    }
};

export { connectToMongo };
