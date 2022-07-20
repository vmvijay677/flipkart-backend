import mongoose from "mongoose";

export const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Mongo is connected!');
    } catch (error) {
        console.log("Mongo connection error!", error.message);
    }
};

export default Connection;