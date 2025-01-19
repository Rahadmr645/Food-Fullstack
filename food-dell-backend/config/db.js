import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();;

const connectToMongo = async () => {

    const mongo_url = process.env.MONGO_URL;

    try {
        await mongoose.connect(mongo_url,
            {
                useNewUrlParser: true, useUnifiedTopology: true
            });
        console.log('DB connected')
    } catch (error) {
        console.error('Faild to connect to mongodb', error.message);
    }

}


export {connectToMongo};