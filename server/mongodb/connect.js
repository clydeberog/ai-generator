import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect("mongodb+srv://clydefrancis2:clydeclyde3995@cluster0.ivgtlcm.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Connected to MongoDB cluster'))
    .catch((err) => console.log(err));
};

export default connectDB;